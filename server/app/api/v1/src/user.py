from flask import jsonify,json
from sqlalchemy import text
from sqlalchemy import exc

from app import db
from app.models import User

class User_Object(object):

    def __init__(self, first_name, last_name, phone, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.phone = phone
        self.email = email
        self.password = password

    def store(self):
        user = User(first_name=self.first_name,
        last_name = self.last_name,
        phone=self.phone,
        email=self.email,
        password=self.password)

        try:
            db.session.add(user)
            db.session.commit()
            return jsonify({
             'Status' : 200,
             'Message' : 'User has been successfully added'
             })
        except exc.SQLAlchemyError:
             return jsonify({
              'Status' : 404,
              'Message' : 'User has already been added'
              })

    def check(self):
        user = User(
        email=self.email,
        password=self.password)

        check = f"SELECT * FROM user WHERE email='{self.email}' and password='{self.password}' "
        result = db.engine.execute(check) # Executes SQL statement
        data = result.fetchall()

        if len(data) == 1:
            return jsonify({
            'Status' : True,
            'Message' : 'User does exist in the database'
            })
        else:
            return jsonify({
            'Status' : False,
            'Message' : 'User does NOT exist in the database'
            })

    def update(self):
        user = User(first_name=self.first_name,
        last_name = self.last_name,
        phone=self.phone,
        email=self.email,
        password=self.password)

        update = f"<Insert Update SQL Statement>"

        return jsonify({
        'Status' : 200,
        'Message' : 'User was updated successfully'
        })

    def delete(self):
        user = User(email=self.email)

        delete = f"DELETE FROM user WHERE email='{self.email}'"
        try:
            db.engine.execute(delete) # Executes SQL statement
            return jsonify({
             'Status' : 200,
             'Message' : 'User was deleted successfully'
             })
        except exc.SQLAlchemyError:
             return jsonify({
              'Status' : 404,
              'Message' : 'User was not deleted successfully'
              })
