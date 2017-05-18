#!/usr/bin/bash
set -x
INPUT=$1
OUTPUT=$2
set +x
if [ $# -eq 2 ]; then
  #pandoc tsoa-sdd-template-20170511-docx.md --latex-engine=xelatex -o tsoa-sdd-template-20170511-md-.docx
  set -x
  pandoc ${INPUT} --latex-engine=xelatex --reference-docx="TSOA SDD Template_20120917.docx" -o ${OUTPUT}
  echo -e "done\n"
else
  echo -e "convert github markdown md file to Microsoft Office Open XML docx file\n"
  echo -e "    ${0} [markdown-input-file] [docx-output-file]\n"
fi
