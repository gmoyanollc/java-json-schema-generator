#!/usr/bin/bash
if [ ${#} -eq 1 ]; then
  TARGET=./soi-track/src/main/resources/iep-schema
  echo "git rm JSON files not at version ${1} at: ${TARGET}"
  cd ${TARGET}
  
  (for i in `grep -rL --include=*.json 0.4.1`; do git rm -n $i; done)
  
  echo "Do you wish to remove these files?"
  select yn in "Yes" "No"; do
    case $yn in
        Yes ) (for i in `grep -rL --include=*.json 0.4.1`; do git rm $i; done); break;;
        No ) exit;;
    esac
  done
else
	echo "  missing version arguments: ${0} [version]"
fi
