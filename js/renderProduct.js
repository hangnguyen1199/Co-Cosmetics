var productList = JSON.parse(localStorage.getItem('products'))
var productListToRender = JSON.parse(localStorage.getItem('productSelectedList'))
var sortfeature = document.querySelectorAll('.list-top div input')

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
function renderOnload(){
    renderProduct(productListToRender)
    renderbrand();
}
function renderbrand(){
    var brandBar = document.querySelector('.brand-group ul')
    var uniqueArray =[]
    for (let i = 0; i < productListToRender.length; i++) {
        if(!uniqueArray.includes(productListToRender[i].brand)){
            uniqueArray.push(productListToRender[i].brand)
        }
    }
    var brandHTML = uniqueArray.map(function(item){
        return `<li class="bran--check-box">
                    <span>
                        <input type="checkbox">
                        <label for="" class="text-check">${item}</label>
                    </span>
                </li>`
    })
    brandBar.innerHTML = brandHTML.join('')
}
function renderProduct(productListToRender){
    var renderProductBox = document.querySelector('.view-product .row')
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
    renderProductBox.innerHTML = productHTML.join('')
}

function checkToSort(){
    var sortType
    for(var i = 0 ; i < sortfeature.length; i++){
        if(sortfeature[i].checked){
            sortType = sortfeature[i].id
        }
    }
    if(sortType){
        switch(sortType){
            case 'az':{   
                makeSortedList(true,'productName')
                break
            }
            case 'za':{   
                makeSortedList(false,'productName')
                break
            }
            case 'tang':{   
                makeSortedList(true,'priceSell')
                break
            }
            case 'giam':{   
                makeSortedList(false,'priceSell')
                break
            }
        }
    }
}

function makeSortedList(sortType,sortName){
    var sortedList
    if(sortName === 'productName'){
        sortedList = productListToRender.sort(function(a,b){
        if(a[sortName]<b[sortName]){
            return -1;
        }
        if(a[sortName]>b[sortName]){
            return 1;
        }
        return 0;
    })
    }
    else{
        sortedList = productListToRender.sort(function(a,b){
            return a[sortName]-b[sortName]
        })
    }
    if(!sortType){
        sortedList.reverse();
    }
    renderProduct(sortedList)
}
