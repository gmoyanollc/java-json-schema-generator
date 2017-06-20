#!/usr/bin/bash
SOURCE=/media/sf_gData/Project/TSOA/Schema/Product/tsoa-track-2.0/resources/documentation
TARGET=./tsoa-track/src/main/resources/documentation
cp -v ${SOURCE}/*.* ${TARGET}
