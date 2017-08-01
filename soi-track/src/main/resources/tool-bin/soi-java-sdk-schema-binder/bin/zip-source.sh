#!/bin/bash

if [ ${1} > 0 ] ; then
  set -x
  SOURCE_DIR="../../iep-schema"
  #FIND_CRITERIA="-cnewer ../../iep-schema/tsoa/soi/tsoa-track/2.0/TsoaTrack.json"
  FIND_CRITERIA="-ctime -1"
  ZIP_TARGET_DIR="."
  #ZIP_FILE="TsoaTrack.zip"
  ZIP_LABEL=${1}
  ZIP_VERSION=${2}


  #find ../../iep-schema -cnewer ../../iep-schema/tsoa/soi/tsoa-track/2.0/TsoaTrack.json -type f  | xargs zip ../tool-bin/soi-java-sdk-schema-binder/TsoaTrack-01.zip
  find ../../iep-schema ${FIND_CRITERIA} -type f  | xargs zip ${ZIP_TARGET_DIR}/${ZIP_LABEL}-${ZIP_VERSION}.zip
  echo "  done: zipped to ${ZIP_TARGET_DIR}/${ZIP_LABEL}-${ZIP_VERSION}.zip"
else
  echo "  usage: ${0} ZIP_LABEL ZIP_VERSION"
fi