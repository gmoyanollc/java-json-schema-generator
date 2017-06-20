TARGET_DIR="source"
#ZIP_FILE="TsoaTrack-01.zip"
ZIP_FILE=${1}

#rm -rvf source/iep-schema/*
rm -rvf ${TARGET_DIR}/*
#unzip -o TsoaTrack-01.zip -d source/iep-schema
unzip -o ${ZIP_FILE} -d ${TARGET_DIR}
rm -vf ${TARGET_DIR}/iep-schema/TsoaTrack-dereferenced.json
