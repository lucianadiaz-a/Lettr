from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:dbuserdbuser@localhost/lettr'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Listing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.Text)
    address = db.Column(db.Text)
    neighborhood = db.Column(db.Text)
    bed_bath = db.Column(db.Text)
    price = db.Column(db.Text)
    date_range = db.Column(db.Text)
    host = db.Column(db.Text)

    def __init__(self, image, address, neighborhood, bed_bath, price, date_range, host):
        self.image = image
        self.address = address
        self.neighborhood = neighborhood
        self.bed_bath = bed_bath
        self.price = price
        self.date_range = date_range
        self.host = host

class ListingSchema(ma.Schema):
     class Meta:
          fields = ('id', 'image', 'address', 'neighborhood', 'bed_bath','price','date_range', 'host')

listing_schema = ListingSchema()
listing_schemas = ListingSchema(many=True)

@app.route('/', methods = ['GET'])
def get_all_listings():
    all_apts = Listing.query.all()
    results = listing_schemas.dump(all_apts)
    return jsonify(results)

@app.route('/get/<id>/', methods = ['GET'])
def get_listing(id):
     apt = Listing.query.get(id)
     return listing_schema.jsonify(apt)

@app.route('/add', methods = ['POST'])
def add_listing():
    image = request.json['image']
    address = request.json['address']
    neighborhood = request.json['neighborhood']
    bed_bath = request.json['bed_bath']
    price = request.json['price']
    date_range = request.json['date_range']
    host = request.json['host']
    
    apt = Listing(image, address, neighborhood, bed_bath, price, date_range, host)
    db.session.add(apt)
    db.session.commit()

    return listing_schema.jsonify(apt)

@app.route('/delete/<id>/', methods = ['DELETE'])
def delete_listing(id):
     apt = Listing.query.get(id)
     db.session.delete(apt)
     db.session.commit()
     return listing_schema.jsonify(apt)


with app.app_context():
        db.create_all()

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
