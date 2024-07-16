from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/users')
def users():
    return {
        "users": [
            "User 1",
            "User 2",
            "User 3"
        ]
    }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)
