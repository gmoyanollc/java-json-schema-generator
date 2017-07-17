#!/usr/bin/bash
if [ ${#} -eq 1 ]; then
  TARGET=./soi-track/src/main/resources
  echo "creating zip file at: ${TARGET}"
  cd ${TARGET}
  cp -v tool-bin/soi-java-sdk-schema-binder/target/tsoa-track-2.0-json-iep-schema-${1}.jar .
  #cp -rv tool-bin/soi-java-sdk-schema-binder/target/generated-sources .
  rsync -av --delete tool-bin/soi-java-sdk-schema-binder/target/generated-sources .
  zip --exclude=*.zip tsoa-track-2.0-json-iep-schema-${1}.zip *.*
  zip -ru tsoa-track-2.0-json-iep-schema-${1}.zip iep-sample
  zip -ru --exclude=*.vscode* tsoa-track-2.0-json-iep-schema-${1}.zip iep-schema
  zip -ru tsoa-track-2.0-json-iep-schema-${1}.zip generated-sources
else
	echo "  missing version arguments: ${0} [version]"
fi
