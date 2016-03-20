import cgi
from google.appengine.ext import ndb
import webapp2
import jinja2
import os

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__) + "/app"))

class Data(webapp2.RequestHandler):


class Main(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.write(template.render())

class Shows(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('shows.html')
        self.response.write(template.render())

class Merch(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('merch.html')
        self.response.write(template.render())

class Videos(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('media.html')
        self.response.write(template.render())

class Members(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('members.html')
        self.response.write(template.render())

class Contact(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('contact.html')
        self.response.write(template.render())

class Cart(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('cart.html')
        self.response.write(template.render())


app = webapp2.WSGIApplication([
    ('/', Main),
    ('/shows', Shows),
    ('/merch', Merch),
    ('/videos', Videos),
    ('/members', Members),
    ('/contact', Contact),
    ('/cart', Cart),
], debug=True)
