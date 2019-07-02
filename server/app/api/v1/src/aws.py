import boto3

class AWS(object):

	def __init__(self, bucket):
		self.s3 = boto3.resource('s3') # Start our S3 instance
		self.bucket = bucket

	def upload(self, file, user):
		filename = user + '/' + file
		self.s3.meta.client.upload_file(Filename=filename,
		Bucket=self.bucket, Key=file)
