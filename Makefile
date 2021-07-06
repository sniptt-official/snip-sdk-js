GENERATOR_NAME=typescript-fetch
OUTPUT_DIR=src/generated
SPEC_FILE=/tmp/openapi.yaml
CONFIG_FILE=config.yaml

# Download OpenAPI spec to /tmp.
download-spec:
	aws s3 cp s3://sniptt-openapi/openapi.yaml $(SPEC_FILE)

# Generate Typescript SDK.
generate-sdk-js-local:
	openapi-generator generate \
		-i $(SPEC_FILE) \
		-g ${GENERATOR_NAME} \
		-o ${OUTPUT_DIR} \
		-c ${CONFIG_FILE}

# Fetch latest Sniptt OpenAPI spec and generate typescript SDK.
generate-sdk: download-spec \
	generate-sdk-js-local
