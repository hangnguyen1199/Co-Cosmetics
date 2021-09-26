var array = [];
//mảng lưu các product
var id = 1

function Product(department, category, belongTo, productName, mainAvatar, brand, status, productType, priceSell, realPrice, moreImage, description) { //constructor function
    this.productID = id++, //cấp phát tự động 
        this.url = [department, category, belongTo],
        // department,(String)
        // trang điểm , chăm sóc da, chăm sóc cơ thể, phụ kiện, cho nam, nước hoa, săn quà...
        // category, (String)
        // trang điểm mặt, môi, mắt,... 
        // belongTo, (String)
        // Cushion - Kem nền, Che khuyết điểm, Phấn phủ - Phấn nền, Má hồng, Tạo khối - Highlight, Xịt khoáng nền
        this.productName = productName,
        this.mainAvatar = mainAvatar,
        this.brand = brand,
        this.status = status,
        this.productType = productType,
        this.priceSell = priceSell,
        this.realPrice = realPrice,
        this.moreImage = moreImage,
        this.description = description
        // {
        //     productName,
        //     //tên sản phâm 
        //     descriptionsImage[],
        //     //ảnh trong phần mô tả
        //     descriptionsContent[]
        //     //phần nội dung mô tả cho sản phẩm
        // }
}

array.push(
    new Product(
        'TrangDiem',
        'mat',
        'cushion-1',
        'Sample Kem nền Maybelline Fit Me Matte Poreless Foundation',
        '../image/product1.webp',
        'Maybeline',
        'Còn hàng', [],
        '35000',
        '75000', [], [{
                descTitle: "Thương hiệu:",
                descContent: "Thương hiệu mỹ phẩm Clio là thương hiệu nổi tiếng tại Hàn Quốc. Clio chuyên sản xuất các dòng sản phẩm trang điểm như son môi, chì kẻ mày, phấn mắt, mascara,... phù hợp với từng nhu cầu làm đẹp và sở thích khác nhau của nhiều chị em phụ nữ. ",
                descImage: "../image/brand_1.webp"
            },
            {
                descTitle: "Thương hiệu:",
                descContent: "Thương hiệu mỹ phẩm Clio là thương hiệu nổi tiếng tại Hàn Quốc. Clio chuyên sản xuất các dòng sản phẩm trang điểm như son môi, chì kẻ mày, phấn mắt, mascara,... phù hợp với từng nhu cầu làm đẹp và sở thích khác nhau của nhiều chị em phụ nữ. ",
                descImage: "../image/brand_1.webp"
            },
        ]
    )
)



localStorage.setItem("products", JSON.stringify(array))