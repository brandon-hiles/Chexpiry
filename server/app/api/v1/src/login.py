from app.api.v1.src.user import User

class Login(object):

    """
    Login is our Login Controller, containing all of our
    logic involving the login flow.
    """

    def __init__(self, first_name, last_name, phone, email,
    password):
        self.user = User(first_name=first_name, last_name=last_name, phone=phone,
        email=email, password=password)

    def check_user(self):
        if self.user.email is not None:
            return True
        else:
            return False
