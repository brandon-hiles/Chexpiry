from flask import jsonify,json
from flask import request
from flask import render_template
from sqlalchemy import exc


from app.api.v1 import api
from app.api.v1.src.aws import AWS
from app.api.v1.src.user import User_Object

# Database Endpoint

# Create User
@api.route('/user/store', methods=['POST'])
def store_user():
    """
    Store User Endpoint: Stores User in database, if user does
    not already exist in database.
    """

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

    return user.store()

@api.route('/user/check', methods=['GET'])
def check_user():
    # Check user endpoint

    # Initialize our user requested paramters
    email = request.args.get("email")
    password = request.args.get("password")

    # Initialize our User object
    user = User_Object(first_name="None",
                last_name="None",
                phone="None",
                email=email,
                password=password)

    return user.check()

@api.route('/user/update', methods=['PUT'])
def update_user():
    # Update user endpoint

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

    return user.update()

@api.route('/user/delete', methods=['DELETE'])
def delete_user():

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

    return user.delete()

@api.route('/user/upload', methods=['PUT'])
def upload_file():

    file = request.args.get("file")
    return "File was successfully uploaded"

# Pantry Endpoints
@api.route('/pantry/check', methods=['GET'])
def get_pantry():
    # Check the items in the pantry

    item = request.args.get("item")
    if item == 'all':
        # return all items
        pass
    else:
        return item

@api.route('/pantry/assign', methods=['PUT'])
def assign_expiry_date():
    # Assigns the expiry date to the item (Requires an AI Model)
    return 'Expiry Date is set'

# Recipe Endpoint
@api.route('/recipes', methods=['GET'])
def get_recipes():
    return "Recipe List"

# AWS Endpoint
@api.route('/aws', methods=['GET', 'PUT'])
def connect():
    aws.upload(file="README.md", user='brandon')
    return render_template('aws.html')

@api.route('/documentation', methods=['GET'])
def document():
    return render_template('documentation.html')
