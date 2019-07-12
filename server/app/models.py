from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(35), index=True)
    last_name = db.Column(db.String(40), index=True)
    email = db.Column(db.String(120), index=True, unique=True)
    phone = db.Column(db.String(20), index=True)
    password = db.Column(db.String(128), index=True)

    def __repr__(self):
        return '<User {}>'.format(self.email)

class Suggestions(db.Model):

    user_id = db.Column(db.Integer, primary_key=True) # user_id
    recipe_id = db.Column(db.Integer) # Recipe id (used for lookup)
    ingredients = db.Column(db.Integer) # Number of Ingredients
    estimated_time = db.Column(db.Integer) # Estimates how long recipe takes
    time_created = db.Column(db.Time) # Time suggestion was created
    expiration_date = db.Column(db.Time) # Time to make recipe with ingredients prior to expiration
    priority = db.Column(db.Integer) # Priority based on expiration date.

class Pantry(db.Model):

    user_id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(64))
    created_time = db.Column(db.String(100))
    expiry_time = db.Column(db.String(100))
    delete = db.Column(db.Boolean)
