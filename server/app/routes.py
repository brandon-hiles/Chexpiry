from app import app
from flask import render_template

# Home Route
@app.route('/')
def main():
    return render_template('index.html')

# Documentation Endpoint
@app.route("/documentation")
def documentation():
	return render_template('documentation.html')
