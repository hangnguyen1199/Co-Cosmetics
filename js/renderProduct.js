var productList = JSON.parse(localStorage.getItem("products"));
var productListToRender = JSON.parse(
  localStorage.getItem("productSelectedList")
);
var sortfeature = document.querySelectorAll(".list-top div input");
var brandBar = document.querySelector(".brand-group ul");
function showProductList(element) {
  var productSelectedList = productList.filter(function (item) {
    for (let i = 0; i < item.url.length; i++) {
      if (item.url[i] === element) {
        return true;
      }
    }
  });
  localStorage.setItem(
    "productSelectedList",
    JSON.stringify(productSelectedList)
  );
}
function makeURL(element){
  //element is tab clicked
  var url = new URL("http://127.0.0.1:5500/page.html");
  url.searchParams.append("name",element.id)
  window.location.assign(url)
}

function getQueryName(element){
    const partURL = window.location.href
    const index = partURL.indexOf("=")+1
    const queryName = index?partURL.substring(index):"face-make-up"
    return queryName
    
}

function renderOnload() {
  showProductList(getQueryName())
  productListToRender = JSON.parse(
    localStorage.getItem("productSelectedList")
  )
  renderProduct(productListToRender);
  renderbrand(productListToRender);
}
function renderbrand(listToRenderBrand) {
  var uniqueArray = [];
  for (let i = 0; i < listToRenderBrand.length; i++) {
    if (!uniqueArray.includes(listToRenderBrand[i].brand)) {
      uniqueArray.push(listToRenderBrand[i].brand);
    }
  }
  var brandHTML = uniqueArray.map(function (item, index) {
    return `<li class="bran--check-box">
                    <span>
                        <input id = "brand${index}" type="checkbox" value="${item}">
                        <label for="brand${index}" class="text-check">${item}</label>
                    </span>
                </li>`;
  });
  brandBar.innerHTML = brandHTML.join("");
}
function renderProduct(list) {
  var renderProductBox = document.querySelector(".view-product .row");
  var productHTML = list.map(function (item) {
    return `<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                <div class="product_border">
                    <div class="product__item">
                        <div class="product__img">
                            <img src="${item.mainAvatar}" alt=${item.productName}"">
                            <div class="sale"></div>
                            <div class="caption-inner">
                                <button class="btn btn-success add">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        <div class="product__text">
                            <h3 class="product-name">
                                <a href="../product.html?productID=${item.productID}" class="textline" title="${item.productName}">${item.productName}</a>
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
            </div>`;
  });
  renderProductBox.innerHTML = productHTML.join("");
}

function checkToSort() {
  var sortType;
  for (var i = 0; i < sortfeature.length; i++) {
    if (sortfeature[i].checked) {
      sortType = sortfeature[i].id;
    }
  }
  if (sortType) {
    switch (sortType) {
      case "az": {
        makeSortedList(true, "productName");
        break;
      }
      case "za": {
        makeSortedList(false, "productName");
        break;
      }
      case "tang": {
        makeSortedList(true, "priceSell");
        break;
      }
      case "giam": {
        makeSortedList(false, "priceSell");
        break;
      }
    }
  }
}
function makeSortedList(sortType, sortName) {
  var sortedList;
  if (sortName === "productName") {
    sortedList = productListToRender.sort(function (a, b) {
      if (a[sortName] < b[sortName]) {
        return -1;
      }
      if (a[sortName] > b[sortName]) {
        return 1;
      }
      return 0;
    });
  } else {
    sortedList = productListToRender.sort(function (a, b) {
      return a[sortName] - b[sortName];
    });
  }
  if (!sortType) {
    sortedList.reverse();
  }
  renderProduct(sortedList);
}
function checkSelectedBrand() {
  var brandList = document.querySelectorAll(".brand-group ul li span input");
  var brandCheckedList = [];
  for (let i = 0; i < brandList.length; i++) {
    if (brandList[i].checked) {
      brandCheckedList.push(brandList[i].value);
    }
  }
  if (brandCheckedList.length != 0) {
    var newListByBrand = productListToRender.filter((item) => {
      return brandCheckedList.includes(item.brand);
    });
    renderProduct(newListByBrand);
  } else {
    renderProduct(productListToRender);
  }
}
