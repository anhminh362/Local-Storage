

// Đẩy mảng product vào local storage
function Save() {
    localStorage.setItem('listProduct', JSON.stringify(products));
}
// Lấy sản phẩm từ local storage
function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}
// Xuất sản phẩm ra html
if (localStorage.getItem('listProduct') != null) {
load();
}
var listLocal = function() {
var listproduct = '';
for (var i in product) {
var data = JSON.parse(JSON.stringify(product[i]));

var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
    listproduct += '<div class="card product p-2" styte="width:auto">';
    listproduct += '<img class="card-img-top" src="' + data.img + '" alt="...">';
    listproduct += '<div class="card-title product-title text-center h5" >' +
    data.name + '</div>';
    listproduct += '<div class="price text-center h6">' + data.price + '₫</div>';
    
    listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + " data-name=" + data.name +" data-img=" +data.img +" data-price=" +data.price + 'onclick="tks()">';
    listproduct += '<a>';
    listproduct += '<i class="fas fa-cart-plus"></i>';
    listproduct += '</a>';
    listproduct += '</span>';
    listproduct += '</div>';
    listproduct += '</div>';

document.getElementById('banchay').innerHTML += listproduct;
}

Save();
};

listLocal();
localStorage.clear();

                            