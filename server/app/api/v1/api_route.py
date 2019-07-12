from flask import jsonify,json
from flask import request
from sqlalchemy import exc


from app.api.v1 import api
from app.api.v1.src.aws import AWS
from app.api.v1.src.user import User_Object

# Database Endpoint

# Create User
@api.route('/db/users/store', methods=['POST'])
def store():

    # Initialize our user requested paramters
    first_name = request.args.get('first_name')
    last_name = request.args.get("last_name")
    phone = request.args.get("phone")
    email = request.args.get("email")
    password = request.args.get("password")

    # Initialize our User object
    user = User_Object(first_name=first_name,
                last_name=last_name,
                phone=phone,
                email=email,
                password=password)
    try:
        user.store()
        return jsonify({'Status' : 200, 'Message' : 'User has been successfully added'})
    except exc.SQLAlchemyError:
        return jsonify({'Status' : 404, 'Message' : 'User has already been added'})

@api.route('/user', methods=['PUT'])
def update_user(id):
    return "Update User"

# Recipe Endpoint
@api.route('/recipes', methods=['GET'])
def get_recipes():
    return "Recipe List"

# AWS Endpoint
@api.route('/aws', methods=['GET', 'PUT'])
def connect():
    aws.upload(file="README.md", user='brandon')
    return render_template('aws.html')
