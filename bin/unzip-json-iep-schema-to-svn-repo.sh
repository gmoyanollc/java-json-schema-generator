#!/usr/bin/bash
if [ ${#} -eq 1 ]; then
  #SOURCE=/media/sf_gPublished/tsoa-track-2.0-json-iep-schema-${1}.zip
  SOURCE=./soi-track/src/main/resources/tsoa-track-2.0-json-iep-schema-${1}.zip
  TARGET=/media/sf_gPublished/Project/TSOA/Product/tsoa40xx-trunk-Command-and-Control-Software-Package-Development-Track-Schemas
  echo "extracting zip file ${SOURCE} --> ${TARGET}"
  unzip -u ${SOURCE} -d ${TARGET}
else
	echo "  missing version arguments: ${0} [version]"
fi
