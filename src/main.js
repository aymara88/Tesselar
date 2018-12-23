var page = 0;
var data;

function sliderCards(position) {

    var newPage = page + position;
    var firstIndex = 4 * newPage;

    console.log(newPage);
    console.log(firstIndex);
    console.log(data.products.length);

    if (newPage < 0) {
        page = 0;
        renderData(page);
    } else if ((newPage >= 0) && (firstIndex < data.products.length)) {
        page = newPage;
        renderData(page);
    }
    else if (firstIndex >= data.products.length) {
        return;
    }

}

$.ajax({ url: "/products" })
.done(function (responseData) {
    data = responseData;
    renderData(page);
});


function renderData(page) {

    (function calcRestPropertiesProduct(reviews, products) {
        let sumador = 0;
        let contador = 0;
        for (let i = 0; i < products.length; i++) {
            products[i].discount = parseInt(100 - ((products[i].specialPrice * 100) / products[i].price));
            products[i].imgUrl = "../images/" + products[i].id + ".jpg";
            if (products[i].id) {
                for (let j = 0; j < reviews.length; j++) {
                    if (products[i].id === reviews[j].id) {
                        sumador += reviews[j].stars;
                        contador++;
                    }
                }
                if ((sumador != 0) && (contador != 0)) {
                    products[i].reviewAverage = parseInt(sumador / contador);
                    sumador = 0;
                    contador = 0;
                }
                else {
                    products[i].reviewAverage = 0;
                }
            }
        }
    })(data.reviews, data.products)




    var arrProducts = [];
    var initialIndex = 4 * page;
    var finalIndex = (4 * page) + 4;

    arrProducts = data.products.slice(initialIndex, finalIndex);

    function cardsProduct(arrProducts) {

        var container = document.getElementById('cards');
        var html = "<div>";

        for (let i = 0; i < arrProducts.length; i++) {
            const element = arrProducts[i];

            var imgDomElmt = '<img class="productImg" src="' + element.imgUrl + '"/>';
            var lamName = '<p class="nameLamina">' + element.name + '</p>';
            var lamDiscount = '<p class="discount">' + element.discount + ' %</p><div class= "redondo"></div>';
            var lamPrice = '<p class="prevprice">$' + element.price + '</p>';
            var lamActPrice = '<p class="actualprice">$' + element.specialPrice + ' </p>';
            var lamStar = '<p class="lamStar">a</p>';
            var lamReview = (function () {
                if (element.reviewAverage === 0) {
                    return '<p class="reviews"><i class="fas fa-star-half"></i><a id="linkCart" href="#">Add To Cart</a></p>';
                } else if (element.reviewAverage === 1) {
                    return '<p class="reviews"><i class="fas fa-star"></i></p>';
                } else if (element.reviewAverage === 2) {
                    return '<p class="reviews"><i class="fas fa-star"></i><i class="fas fa-star"></i></p>';
                } else if (element.reviewAverage === 3) {
                    return '<p class="reviews"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>';
                } else if (element.reviewAverage === 4) {
                    return '<p class="reviews"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>';
                } else if (element.reviewAverage === 5) {
                    return '<p class="reviews"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>';
                }
            })();
            html += '<div class="laminas">' +
                imgDomElmt + lamName + lamDiscount + lamPrice + lamActPrice + lamStar + lamReview;
            html += '</div>';
        }

        html += "</div>";

        container.innerHTML = html;
    }

    cardsProduct(arrProducts);
}



