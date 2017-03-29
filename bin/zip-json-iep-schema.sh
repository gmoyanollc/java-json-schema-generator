#!bash
if [ ${#} -eq 1 ]; then
  cd ./soi-track/src/main/resources
  zip --exclude=*.zip tsoa-track-2.0-json-iep-schema-${1}.zip *.*
  zip -ru tsoa-track-2.0-json-iep-schema-${1}.zip iep-sample
  zip -ru --exclude=*.vscode* tsoa-track-2.0-json-iep-schema-${1}.zip iep-schema
else
	echo "missing version arguments: ${0} [version]"
fi
