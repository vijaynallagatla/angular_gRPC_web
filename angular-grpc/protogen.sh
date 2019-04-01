#!/bin/bash

mkdir -p ./ts/_proto

PROTOC=`command -v protoc`
if [[ "$PROTOC" == "" ]]; then
  echo "Required "protoc" to be installed. Please visit https://github.com/protocolbuffers/protobuf/releases (3.5.0 suggested)."
  exit -1
fi

# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PATH="/node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="/generated"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=true:${OUT_DIR}" \
    echo.proto