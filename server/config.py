import os
basedir = os.path.abspath(os.path.dirname(__file__))


# Current database configuration
server = 'localhost'
db = 'chexpiry'
username = 'root'
password = 'password'

class Config(object):
    # ...
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        f"mysql+pymysql://{username}:{password}@{server}/{db}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
