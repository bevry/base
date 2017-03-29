#!/bin/sh
echo "installing docpad's dev dependencies so docpad's testers works..."
cd ./node_modules/docpad && npm install --only=dev && cd ../.. || exit -1
