#!/usr/bin/bash
if [ ${#} -eq 1 ]; then
  TARGET=./tsoa-track/src/main/resources
  echo "creating zip file at: ${TARGET}"
  cd ${TARGET}
  zip --exclude=*.zip tsoa-track-2.0-xml-iep-schema-${1}.zip *.*
  zip -ru tsoa-track-2.0-xml-iep-schema-${1}.zip iep-sample
  zip -ru --exclude=*.vscode* --exclude=*.zip tsoa-track-2.0-xml-iep-schema-${1}.zip iep-schema
  echo -e "\ndone.  created: ${TARGET}/tsoa-track-2.0-xml-iep-schema-${1}.zip "
  cp -v "${TARGET}/tsoa-track-2.0-xml-iep-schema-${1}.zip" /media/sf_gData/Project/TSOA/Schema/Product/tsoa-track-2.0
else
	echo "  missing version arguments: ${0} [version]"
fi
