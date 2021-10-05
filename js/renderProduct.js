var productList = JSON.parse(localStorage.getItem('products'))
var productListToRender = JSON.parse(localStorage.getItem('productSelectedList'))

function showProductList(element){
    var productSelectedList = productList.filter(function(item){
       for(let i = 0; i < item.url.length; i++){
           if(item.url[i]===element.id){
               return true
           }
       }
    })
    localStorage.setItem('productSelectedList',JSON.stringify(productSelectedList))
}
function renderProduct(){
    var renderProductBox = document.querySelector('.view-product .row')
    var brandBar = document.querySelector('.brand-group ul')
    var productHTML = productListToRender.map(function(item){
        return `<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div class="product_border">
                        <div class="product__item">
                            <div class="product__img">
                                <img src="${item.mainAvatar}" alt="">
                                <div class="sale"></div>
                                <div class="caption-inner">
                                    <button class="btn btn-success add">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div class="product__text">
                                <h3 class="product-name">
                                    <a href="" class="textline" title="${item.productName}">${item.productName}</a>
                                </h3>
                            </div>
                            <div class="product__price">
                                <div class="special-price">
                                    <span class="product-price">${item.priceSell}₫</span>
                                </div>
                                <div class="old-price">
                                    <span class="product-price-old">${item.realPrice}₫</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    var brandHTML = productListToRender.map(function(item){
        return `<li class="bran--check-box">
                    <span>
                        <input type="checkbox">
                        <label for="" class="text-check">${item.brand}</label>
                    </span>
                </li>`
    })
    brandBar.innerHTML = brandHTML.join('')
    renderProductBox.innerHTML = productHTML.join('')
}