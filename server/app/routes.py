from flask import render_template
from app import app

from app.src.api.aws.aws import AWS

# Define AWS Variables
bucket = 'chexpiry.dev'
aws = AWS(bucket=bucket)

# Home Route
@app.route('/')
def main():
    return render_template('index.html')

# AWS Endpoint
@app.route('/api/aws')
def connect():
    aws.upload(file="README.md", user='brandon')
    return render_template('aws.html')

# Documentation Endpoint
@app.route("/api/documentation")
def documentation():
	return render_template('documentation.html')

# Login Endpoint
@app.route("/api/login/user/<user>/password/<password>")
def login(user, password):
	return f"{user} is trying to login with {password}"
