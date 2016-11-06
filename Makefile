deploy:
	gulp
	cd dist/; \
	aws s3 cp . s3://zesd.co/ --recursive --acl public-read
