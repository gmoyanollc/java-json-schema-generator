#!/usr/bin/bash
# 
# run from project root folder
#

mapping_path_constant="../../.././../../../tsoa-track/src/main/resources/tool-bin/x-to-y-n-back/mapping"
mapping_path_arg=${1}
if [ -n "${mapping_path_arg}" ];
then
  mapping_path=${mapping_path_arg};
else
  mapping_path=${mapping_path_constant};
fi

(cd ${mapping_path} && ls -Q --format=commas *.jsonschema *.json)
