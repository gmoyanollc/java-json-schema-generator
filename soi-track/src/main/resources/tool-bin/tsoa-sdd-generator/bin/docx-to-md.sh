
# https://criticallycognitive.wordpress.com/2014/12/31/convert-docx-to-markdown/

unoconv --stdout -f html "TSOA SDD Template_20120917.docx" | pandoc -f html -t markdown_github -o tsoa-sdd-template-20170511-docx.md
