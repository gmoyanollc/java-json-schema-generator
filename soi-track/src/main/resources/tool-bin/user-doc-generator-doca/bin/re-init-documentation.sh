#!/usr/bin/bash
rm -Ir documentation
node_modules/.bin/doca init -i ../../iep-schema
cd documentation
npm install
npm start
echo "open http://localhost:8000"
