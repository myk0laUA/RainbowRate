from flask import Flask
import cohere
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

api_key = "p9xVIxwnJdbY7AkNBZ121U1ImJeMT80HKM5Jm1DZ"
co = cohere.Client(api_key)

from application import routes
