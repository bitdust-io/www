import sys
import markdown2
import codecs
import locale

from io import open

markdowner = markdown2.Markdown(extras=['markdown-in-html', 'tables',])

mdsrc = open(sys.argv[1], 'rt', encoding='utf-8').read()

htmlsrc = markdowner.convert(mdsrc)
sys.stdout.write(htmlsrc.encode('utf-8').decode('utf-8'))
