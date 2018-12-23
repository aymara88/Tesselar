const express = require('express')
const app = express()
const port = 3050
var path = require('path');

app.use('/images/', express.static('images'));
app.use(express.static('src'));

const data = {
    "products": [
        {
            "id": 234,
            "name": "Same day Delivery",
            "price": 450,
            "specialPrice": 250,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 235,
            "name": "Tulip Flower Bouquet",
            "price": 110,
            "specialPrice": 50,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 236,
            "name": "Triple Pleasures",
            "price": 290,
            "specialPrice": 110,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 237,
            "name": "Basket of Gladness",
            "price": 99,
            "specialPrice": 70,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 238,
            "name": "Other Flowers & Gifts",
            "price": 150,
            "specialPrice": 87,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 239,
            "name": "Other Flowers & Gifts",
            "price": 645,
            "specialPrice": 45,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 240,
            "name": "Other Flowers & Gifts",
            "price": 110,
            "specialPrice": 70,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 241,
            "name": "Other Flowers & Gifts",
            "price": 200,
            "specialPrice": 67,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 242,
            "name": "Other Flowers & Gifts",
            "price": 200,
            "specialPrice": 67,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 243,
            "name": "Other Flowers & Gifts",
            "price": 200,
            "specialPrice": 67,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 244,
            "name": "Other Flowers & Gifts",
            "price": 200,
            "specialPrice": 67,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },
        {
            "id": 245,
            "name": "Other Flowers & Gifts",
            "price": 200,
            "specialPrice": 67,
            "reviewAverage": 0,
            "discount": 0,
            "imgUrl": ""
        },

    ],
    "reviews": [
        {
            "id": 234,
            "stars": 5
        },
        {
            "id": 234,
            "stars": 2
        },
        {
            "id": 238,
            "stars": 2
        },
        {
            "id": 238,
            "stars": 5
        },
        {
            "id": 239,
            "stars": 4
        },
        {
            "id": 240,
            "stars": 1
        },
        {
            "id": 240,
            "stars": 2
        },
        {
            "id": 241,
            "stars": 1
        },
        {
            "id": 234,
            "stars": 2
        },
        {
            "id": 236,
            "stars": 4
        },
        {
            "id": 236,
            "stars": 2
        },
        {
            "id": 237,
            "stars": 5
        }
    ]
};

app.get('/products', function(req, res) {
    res.send(data);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))