from app import db

class Pantry(db.Model):

    user_id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(64))
    created_time = db.Column(db.String(100))
    expiry_time = db.Column(db.String(100))
    delete = db.Column(db.Boolean)
