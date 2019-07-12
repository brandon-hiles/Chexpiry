from flask import jsonify,json

from app import db
from app.models import User

class User_Object(object):

    def __init__(self, first_name, last_name, email, phone, password):
        self.user = User(first_name=first_name, last_name=last_name, email=email, phone=phone, password=password)

    def store(self):
        db.session.add(self.user)
        db.session.commit()
        return jsonify({'Status' : 200, 'Message' : 'User successfully added'})
