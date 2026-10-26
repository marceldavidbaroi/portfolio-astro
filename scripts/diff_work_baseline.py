"""Compare dist/work/* against .baseline/work/*.
Outside the appendix: must be byte-identical.
Appendix (<section class="markdown-article">): compared structurally
(tags + whitespace-normalised text; <pre> compared by its text content)."""
import re, sys, glob, os, html

MARK = '<section class="markdown-article'

def split(s):
    i = s.find(MARK)
    if i < 0: return s, '', ''
    j = s.find('</section>', i)
    return s[:i], s[i:j], s[j:]

def norm(frag):
    frag = re.sub(r'<!--.*?-->', '', frag, flags=re.S)
    pres = []
    def pre(m):
        text = html.unescape(re.sub(r'<[^>]+>', '', m.group(0)))
        pres.append(text.replace('\r\n', '\n').strip())
        return f'<PRE{len(pres)-1}>'
    frag = re.sub(r'<pre\b.*?</pre>', pre, frag, flags=re.S)
    frag = re.sub(r'\s*\n\s*', ' ', frag.replace('\r', ''))
    frag = re.sub(r'\s+(</)', r'\1', frag)
    frag = re.sub(r'>\s+', '>', frag)
    frag = re.sub(r'\s+<', '<', frag)
    frag = re.sub(r'\s+', ' ', frag).strip()
    frag = re.sub(r' (data-astro-cid-\w+)="?"?', '', frag)
    return frag, pres

bad = 0
for base in sorted(glob.glob('.baseline/work/*/index.html')):
    name = base.split('/')[2]
    new = f'dist/work/{name}/index.html'
    a, b = open(base).read(), open(new).read()
    if a == b: continue
    ap, aa, as_ = split(a); bp, ba, bs = split(b)
    status = []
    if ap != bp: status.append('PRE-APPENDIX DIFFERS')
    if as_ != bs: status.append('POST-APPENDIX DIFFERS')
    if norm(aa) != norm(ba): status.append('APPENDIX DIFFERS (structural)')
    print(name, '->', ', '.join(status) or 'appendix markup differs only in whitespace/highlighting')
    bad += bool([x for x in status])
print('home', 'same' if open('.baseline/home.html').read()==open('dist/index.html').read() else 'DIFFERS')
print('work index', 'same' if open('.baseline/work/index.html').read()==open('dist/work/index.html').read() else 'DIFFERS')
sys.exit(1 if bad else 0)
