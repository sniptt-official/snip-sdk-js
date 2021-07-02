SPEC_URL=/tmp/openapi.yaml

# Download OpenAPI spec to /tmp.
download-spec:
	aws s3 cp s3://sniptt-openapi/openapi.yaml $(SPEC_URL)

# Generate Typescript SDK.
generate-sdk-js-local:
	openapi-generator generate \
		--input-spec $(SPEC_URL) \
		-g typescript-axios \
		-o src \
		-c config.yaml

# Fetch latest Sniptt OpenAPI spec and generate typescript SDK.
generate-sdk: download-spec \
	generate-sdk-js-local
