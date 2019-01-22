import os

import boto3
from flask import Flask, request

from src.api.ai import extract_image_details
from src.api.aws import aws_lookup, query_to_expired_db

app = Flask(__name__) # Setup flask server
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'UofTHacks2019.json' # Set's environment variables

def general_statement(days, veggie):

	# Helper function to check functionality of the backend
	return f"This Produce Item ({veggie}) has {days} days till expiration"

@app.route('/')
def main():
    # Standard Opening page
    return '<h1>Hello world!!</h1>'

@app.route('/detect', methods=['GET','POST'])
def image_analysis():
    # Image Recognition Page
	# Input: URL to AWS S3 image
	# Output: Json results of the image (Still needs to be implemented)

    download_path = "1.jpg" # Testing backend variable (Same with 0.jpg)
    img_file = aws_lookup(img='0.jpg', download_path=download_path) #Output: Image
    data = extract_image_details('1.jpg') # Output: String
    query = query_to_expired_db(data.lower()) # Output: String
    return general_statement(query, data) # Output: String

if __name__ == '__main__':
    app.run(debug=True)
