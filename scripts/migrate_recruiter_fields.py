#!/usr/bin/env python3
"""One-off: move legacy recruiter fields into contribution / myImpact / product."""
from __future__ import annotations

import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    print("pip install pyyaml", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT / "src/content/projects"

MODE_BY_SLUG: dict[str, str] = {
    "01-tradeflowbd": "owner",
    "02-service-desk": "core",
    "03-thrift-inventory": "specialist",
    "04-mindvault": "lead",
    "05-modular-packaging": "specialist",
    "06-uniflow": "lead",
    "07-pennyperfect": "core",
    "08-docstach": "specialist",
    "09-store-management": "lead",
    "10-supercards": "lead",
    "11-quizzes-streaming": "lead",
    "12-brac-social": "core",
    "13-kbeauty-dropship": "lead",
    "14-microfinance-loan-app": "core",
    "15-canteen-app": "lead",
}

LABEL_BY_MODE = {
    "owner": "Product owner & lead engineer",
    "lead": "Technical lead",
    "core": "Core contributor",
    "specialist": "Domain specialist",
}

PRODUCT_METRIC_HINTS = (
    "tenant",
    "sell module",
    "login surface",
    "workbench",
    "channel",
    "inbound",
    "database layer",
    "thread isolation",
    "operator localization",
    "unified cross-platform",
)


def split_frontmatter(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        raise ValueError("missing frontmatter")
    _, rest = text.split("---", 1)
    fm_raw, body = rest.split("---", 1)
    data = yaml.safe_load(fm_raw) or {}
    return data, body


def infer_attribution(mode: str, label: str, detail: str) -> str:
    blob = f"{label} {detail}".lower()
    if "team" in blob and mode in ("core", "lead"):
        return "team"
    if any(h in blob for h in PRODUCT_METRIC_HINTS):
        return "product"
    if mode == "owner":
        if any(
            k in blob
            for k in (
                "rls",
                "migration",
                "schema",
                "rpc",
                "postgres",
                "docker",
            )
        ):
            return "personal"
        return "product"
    if mode in ("lead", "specialist", "core"):
        return "personal"
    return "product"


def scope_from_key_decisions(data: dict, max_items: int = 5) -> list[str]:
    kd = data.get("keyDecisions") or []
    out: list[str] = []
    for item in kd[:max_items]:
        if isinstance(item, dict) and item.get("challenge"):
            out.append(str(item["challenge"]))
    return out


def out_of_scope_for(slug: str) -> list[str] | None:
    if slug == "02-service-desk":
        return [
            "Product roadmap and pricing (client-owned)",
            "Production DevOps and hosting (separate team)",
        ]
    return None


def build_contribution(slug: str, data: dict) -> dict:
    mode = MODE_BY_SLUG.get(slug, "core")
    eo = (data.get("executiveOverview") or "").strip()
    headline = eo
    if slug == "01-tradeflowbd" and eo:
        headline = (
            "Owned architecture and migration for a multi-tenant wholesale ERP — "
            "four login surfaces, parent/child tenants, and channel flows on shared stock and money kernels."
        )
    scope = scope_from_key_decisions(data)
    if slug == "01-tradeflowbd" and not scope:
        scope = [
            "Schema split, migration ordering, and local replay",
            "Money-kernel alignment across wholesale, shop, dropship, and inbound AP",
            "Platform docs and VPC narrative in the product SPA",
        ]
    contrib: dict = {
        "mode": mode,
        "label": LABEL_BY_MODE[mode],
        "headline": headline,
        "scope": scope,
    }
    oos = out_of_scope_for(slug)
    if oos:
        contrib["outOfScope"] = oos
    if slug == "02-service-desk":
        contrib["team"] = "Solo core engineer on a client product squad"
    if slug == "03-thrift-inventory":
        contrib["team"] = "Mobile companion to TradeflowBD Thrift (web admin by platform team)"
    return contrib


def build_my_impact(data: dict, mode: str) -> list[dict]:
    metrics = data.get("impactMetrics") or []
    out: list[dict] = []
    for m in metrics:
        if not isinstance(m, dict):
            continue
        label = str(m.get("label", ""))
        value = str(m.get("value", ""))
        detail = m.get("detail")
        attr = infer_attribution(mode, label, detail or "")
        row: dict = {"label": label, "value": value, "attribution": attr}
        if detail:
            row["detail"] = detail
        out.append(row)
    return out


def build_product(slug: str, data: dict) -> dict:
    summary = (data.get("executiveOverview") or "").strip()
    problem = data.get("problemStatement")
    vp_legacy = data.get("valueProposition")
    product: dict = {"summary": summary}
    if problem:
        product["problem"] = problem
    if vp_legacy and isinstance(vp_legacy, dict):
        vp = {
            "targetCustomer": vp_legacy.get("targetCustomer", ""),
            "showCanvas": slug == "01-tradeflowbd",
            "items": vp_legacy.get("items") or [],
        }
        if slug != "01-tradeflowbd":
            vp["showCanvas"] = False
        product["valueProposition"] = vp
    if slug == "01-tradeflowbd" and data.get("caseStory", {}).get("productHeadline"):
        product["tagline"] = data["caseStory"]["productHeadline"]
    return product


def dump_yaml_block(obj) -> str:
    return yaml.dump(
        obj,
        default_flow_style=False,
        allow_unicode=True,
        sort_keys=False,
        width=1000,
    ).rstrip()


def migrate_file(path: Path) -> None:
    slug = path.stem
    text = path.read_text(encoding="utf-8")
    data, body = split_frontmatter(text)
    mode = MODE_BY_SLUG.get(slug, "core")

    data["contribution"] = build_contribution(slug, data)
    data["myImpact"] = build_my_impact(data, mode)
    data["product"] = build_product(slug, data)

    for key in (
        "executiveOverview",
        "impactMetrics",
        "problemStatement",
        "valueProposition",
    ):
        data.pop(key, None)

    fm = dump_yaml_block(data)
    path.write_text(f"---\n{fm}\n---{body}", encoding="utf-8")
    print("migrated", slug)


def main() -> None:
    for path in sorted(PROJECTS.glob("*.md")):
        migrate_file(path)


if __name__ == "__main__":
    main()
