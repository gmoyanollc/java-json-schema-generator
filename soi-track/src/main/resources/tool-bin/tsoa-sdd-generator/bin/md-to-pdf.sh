#!/usr/bin/bash
# man pandoc_markdown
set -x
INPUT=$1
OUTPUT=$2
set +x
if [ $# -eq 2 ]; then
  #pandoc tsoa-sdd-template-20170511.md --latex-engine=xelatex -o tsoasdd.pdf
  set -x
  pandoc ${INPUT} --latex-engine=xelatex -s -o ${OUTPUT}
  echo -e "done\n"
else
  echo -e "convert github markdown md file to Adobe PDF file\n"
  echo -e "    ${0} [markdown-input-file] [pdf-output-file]\n"
fi
