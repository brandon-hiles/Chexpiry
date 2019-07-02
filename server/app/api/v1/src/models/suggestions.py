from app import db

class Suggestions(db.Model):

    user_id = db.Column(db.Integer, primary_key=True) # user_id
    recipe_id = db.Column(db.Integer) # Recipe id (used for lookup)
    ingredients = db.Column(db.Integer) # Number of Ingredients
    estimated_time = db.Column(db.Integer) # Estimates how long recipe takes
    time_created = db.Column(db.Time) # Time suggestion was created
    expiration_date = db.Column(db.Time) # Time to make recipe with ingredients prior to expiration
    priority = db.Column(db.Integer) # Priority based on expiration date.
