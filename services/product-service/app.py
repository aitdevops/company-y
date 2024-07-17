from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/products')
def products():
    return {
        "products": [
            "Lamborghini",
            "Prosche",
            "Ferrari"
        ]
    }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
