from flask import jsonify,json

from app.api.v1 import api
from app.api.v1.src.login import Login
from app.api.v1.src.aws import AWS

# User variables
first_name = "Brandon"
last_name = "Hiles"
phone = "416-579-0452"
email = None
password = "password"

# Login object
login = Login(first_name=first_name, last_name=last_name, phone=phone, email=email, password=password)

# User Endpoint
@api.route('/user/check', methods=['GET'])
def get_users():
    user_list = []
    user_dict = { 'status' : str(login.check_user()) }
    user_list.append(user_dict)
    json_string = json.dumps(user_list)
    return jsonify(User=json_string)

@api.route('/user', methods=['POST'])
def create_user():
    pass

@api.route('/user', methods=['PUT'])
def update_user(id):
    pass

# Recipe Endpoint
@api.route('/recipes', methods=['GET'])
def get_recipes():
    return "Recipe List"

# Pantry/Suggestions Endpoint
@api.route('/user/<int: id>/pantry/', methods=['GET'])
def get_pantry(id):
    return 'Pantry List'

# AWS Endpoint
@api.route('/aws')
def connect():
    aws.upload(file="README.md", user='brandon')
    return render_template('aws.html')
