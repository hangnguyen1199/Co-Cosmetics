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
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        '(Sample) Sữa rửa mặt Green Tea Foam Innisfree',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sample-srm-green-tea-foam-innisfree.webp',
        'Innisfree',
        'Còn hàng', [],
        '9,000đ',
        '', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Bọt rửa mặt dịu nhẹ Sense Plus Mild Cleansing Foam',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/bot-rua-mat-diu-nhe-sense-plus-mild-cleansing-foam.webp',
        'Sense Plus',
        'Còn hàng', [],
        '149,000đ',
        '179,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Gel rửa mặt dịu nhẹ Senka Perfect Gel Gentle wash 100g',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-diu-nhe-senka-perfect-gel-gentle-wash-100g.webp',
        'Senska',
        'Còn hàng', [],
        '109,000đ',
        '175,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Gel rửa mặt La Roche-Posay Effaclar Gel Moussant',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-la-roche-posay-effaclar-gel-moussant.webp',
        'La Roche-Posay',
        'Còn hàng', [],
        '449,000đ',
        '535,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Gel Rửa Mặt Some By Mi Bye Bye Blemish Vita Tox Brightening Bubble Cleanser',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-some-by-mi-bye-bye-blemish-vita-tox-brightening-bubble-cleanser.webp',
        'Some By Mi',
        'Còn hàng', [],
        '245,000đ',
        '320,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Gel rửa mặt và tắm La Roche-Posay Effaclar Micro-Peeling 400ml',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-va-tam-la-roche-posay-effaclar-micro-peeling-400ml.webp',
        'La Roche-Posay',
        'Còn hàng', [],
        '469,000đ',
        '540,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Angel’s Liquid Glutathione Tone Up Deep Pore Wash Cleansing Foam',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-angel-s-liquid-glutathione-tone-up-deep-pore-wash-cleansing-foam.webp',
        'Angel’s Liquid ',
        'Còn hàng', [],
        '179,000đ',
        '250,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Bergamo 150ml',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-bergamo-150ml.webp',
        'Bergamo',
        'Còn hàng', [],
        '59,000đ',
        '99,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Brightening Pore Facial Cleanser Innisfree',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-diu-nhe-senka-perfect-gel-gentle-wash-100g.webp',
        'innisfree',
        'Còn hàng', [],
        '180,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt chống lão hóa Senka Perfect Whip Collagen In 120g',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-chong-lao-hoa-senka-perfect-whip-collagen-in-120g.webp',
        'Senka',
        'Còn hàng', [],
        '105,000đ',
        '170,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt D Program Essence in Cleansing Foam 120gr',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-d-program-essence-in-cleansing-foam-120gr.webp',
        'D Program',
        'Còn hàng', [],
        '299,000đ',
        '390,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt dành cho nam MdoC Blackhead Perfect Scrub Foam 150g',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-danh-cho-nam-mdoc-blackhead-perfect-scrub-foam-150g.webp',
        'MdoC',
        'Còn hàng', [],
        '299,000đ',
        '479,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt dành cho nam MdoC Relief Foam Cleasing',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-danh-cho-nam-mdoc-relief-foam-cleasing-tang-mini-size-bat-ki-voi-chai-full-150gr.webp',
        'MdoC',
        'Còn hàng', [],
        '299,000đ',
        '399,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt đất sét trắng Senka Perfect White Clay 120g',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-dat-set-trang-senka-perfect-white-clay-120g.webp',
        'Senka',
        'Còn hàng', [],
        '99,000đ',
        '170,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Jeju Volcanic Pore Cleansing Foam EX Innisfree',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-jeju-volcanic-pore-cleansing-foam-ex-innisfree-new-2020.webp',
        'Innisfree',
        'Còn hàng', [],
        '145,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Klairs Rich Moist Foaming Cleanser',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-klairs-rich-moist-foaming-cleanser.webp',
        'Klairs',
        'Còn hàng', [],
        '229,000đ',
        '270,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Loreal Paris White Perfect',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-some-by-mi-bye-bye-blemish-vita-tox-brightening-bubble-cleanser.webp',
        ' L-Oreal Paris',
        'Còn hàng', [],
        '45,000đ',
        '99,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Low pH Good Morning Gel Cleanser Cosrx',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-low-ph-good-morning-gel-cleanser.webp',
        'Cosrx',
        'Còn hàng', [],
        '169,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Lựu Innisfree Jeju Pomegranate Revitalizing Foam Cleanser',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-angel-s-liquid-glutathione-tone-up-deep-pore-wash-cleansing-foam.webp',
        'Innisfree',
        'Còn hàng', [],
        '189,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Muji Face Soap',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-muji-face-soap.webp',
        'Muji',
        'Còn hàng', [],
        '125,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Naruko Tea Tree Purifying Clay Mask & Cleanser In 1',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/gel-rua-mat-diu-nhe-senka-perfect-gel-gentle-wash-100g.webp',
        'Naruko',
        'Còn hàng', [],
        '167,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Neogen Dermalogy Foam Cleanser',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-neogen-dermalogy-foam-cleanser.webp',
        'Neogen',
        'Còn hàng', [],
        '229,000đ',
        '290,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt ngăn ngừa mụn Senka Perfect Whip Acne Care 100g',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-ngan-ngua-mun-senka-perfect-whip-acne-care-100g.webp',
        'Senka',
        'Còn hàng', [],
        '79,000đ',
        '158,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Secret Key Snail Repairing Foam Cleaner',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-secret-key-snail-repairing-foam-cleaner.webp',
        'MdoC',
        'Còn hàng', [],
        '99,000đ',
        '160,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt SeoulRose Rosa Skincare Centella',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-seoulrose-rosa-skincare-centella.webp',
        'Seoul Rose',
        'Còn hàng', [],
        '195,000đ',
        '342,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Simple Kind To Skin Refreshing Facial Wash',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-simple-kind-to-skin-refreshing-facial-wash.webp',
        'Simple',
        'Còn hàng', [],
        '89,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rữa Mặt Skin1004 Madagascar Centella Ampoule Foam',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-derladie-witch-hazel-cleansing-gel-tang-bao-li-xi-tet-2021.webp',
        'Senska',
        'Còn hàng', [],
        '249,000đ',
        '300,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Snail Truecica Some By Mi',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-snail-truecica-some-by-mi.webp',
        'Some By Mi',
        'Còn hàng', [],
        '189,000đ',
        '260,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Some By Mi AHA-BHA-PHA 30 Days Miracle Acne Clear Foam',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-some-by-mi-aha-bha-pha-30-days-miracle-acne-clear-foam.webp',
        'Some By Mi',
        'Còn hàng', [],
        '189,000đ',
        '285,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Some By Mi Bye Bye Blackhead 30 Days Miracle Green Tea Tox Bubble Cleanser',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-some-by-mi-bye-bye-blackhead-30-days-miracle-green-tea-tox-bubble-cleanser.webp',
        'Some By Mi',
        'Còn hàng', [],
        '225,000đ',
        '320,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Sur.Medic PH Azulene Soothing PH Cleanser 150ml',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-sur-medic-ph-azulene-soothing-ph-cleanser-150ml.webp',
        'Sur.Medic',
        'Còn hàng', [],
        '199,000đ',
        '325,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt SVR SEBIACLEAR Gel Moussant',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-svr-sebiaclear-gel-moussant.webp',
        'SVR',
        'Còn hàng', [],
        '129,000đ',
        '140,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt tạo bọt Senka Perfect Whip 120g',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tao-bot-senka-perfect-whip-120g.webp',
        'Senka',
        'Còn hàng', [],
        '85,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt tẩy trang The Ordinary Squalane Cleanser',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tay-trang-the-ordinary-squalane-cleanser.webp',
        'The Ordinary',
        'Còn hàng', [],
        '245,000đ',
        '395,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt thải độc Super Vegitoks',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-thai-doc-super-vegitoks-kem-mini-30ml-trong-hop.webp',
        'Byvibes Wonder Bath',
        'Còn hàng', [],
        '219,000đ',
        '309,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt The Saem Healing Tea Garden Cleansing Foam',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-the-saem-healing-tea-garden-cleansing-foam.webp',
        'The saem',
        'Còn hàng', [],
        '120,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Trà Xanh Innisfree Green Tea Cleasing Foam',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tra-xanh-innisfree-green-tea-cleasing-foam.webp',
        'Innisfree',
        'Còn hàng', [],
        '159,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt trà xanh Rohto Shirochasou',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tra-xanh-rohto-shirochasou.webp',
        'Rohto',
        'Còn hàng', [],
        '99,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt trị mụn Caryophy Portulaca Foam Cleanser',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tri-mun-caryophy-portulaca-foam-cleanser.webp',
        'Caryophy',
        'Còn hàng', [],
        '232,000đ',
        '305,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt ý dĩ Hatomugi',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-y-di-hatomugi.webp',
        'Hatomugi',
        'Còn hàng', [],
        '69,000đ',
        '120,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa Rửa Mặt Tẩy Tế Bào Chết Muji Face Soap Scrub',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-tay-te-bao-chet-muji-face-soap-scrub.webp',
        'Muji',
        'Còn hàng', [],
        '138,000đ',
        '185,000đ', [], []
    ),
    new Product(
        'skin-care',
        'lam-sach',
        'sua-rua-mat',
        'Sữa rửa mặt Innisfree Bija Trouble Facial Foam Innisfree',
        '../images/imgHang/skin-care/lam-sach-tay-te-bao-chet/sua-rua-mat-1/sua-rua-mat-innisfree-bija-trouble-facial-foam-innisfree.webp',
        'Innisfree',
        'Còn hàng', [],
        '139,000đ',
        '190,000đ', [], []
    ),
    //chăm sóc cơ thể
    //thuc-pham-chuc-nang
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Kẹo dẻo Chewable Hair Vitamins Hairburst',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/keo-deo-chewable-hair-vitamins-hairburst.webp',
        'Hairburst',
        'Còn hàng', [],
        '589,000đ',
        '629,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Thực phẩm bổ sung YUSACHI Collagen 3 in 1',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/thuc-pham-bo-sung-yusachi-collagen-3-in-1.webp',
        'Yusachi',
        'Còn hàng', [],
        '1,650,000đ',
        '2,000,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Tinh chất Collagen Lựu dạng bột Secret: X Red Vitality Pomegranate Collagen',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/tinh-chat-collagen-luu-dang-bot-secret-x-red-vitality-pomegranate-collagen.webp',
        'Secret: X',
        'Còn hàng', [],
        '265,000đ',
        '430,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên Uống Bổ Sung Kẽm DHC Nhật Bản',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-bo-sung-kem-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '120,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên Uống Bổ Sung Nước Và Collagen Innerb Aqua Rich',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-bo-sung-nuoc-va-collagen-innerb-aqua-rich.webp',
        'Innerb Aqua Rich',
        'Còn hàng', [],
        '510,000đ',
        '720,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên Uống Bổ Sung Vitamin C DHC Nhật Bản',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-bo-sung-vitamin-c-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '105,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên uống rau củ quả DHC Nhật Bản',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-rau-cu-qua-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '285,000đ',
        '320,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên Uống Trắng Da DHC Nhật Bản 20 ngày',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-trang-da-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '99,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'thuc-pham-chuc-nang',
        'Viên uống vitamin E DHC Nhật Bản',
        '../images/imgHang/body-care/duong-da-body/thuc-pham-chuc-nang/vien-uong-vitamin-e-dhc-nhat-ban.webp',
        'DHC',
        'Còn hàng', [],
        '165,000đ',
        '230,000đ', [], []
    ),
    //dưỡng thể
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        '[Sample 5ml] Kem Dưỡng Trắng Da Caryophy Glass Skin In Shower Body Tone-Up Cream',
        '../images/imgHang/body-care/duong-da-body/duong-the/kem-duong-trang-da-skin-caryophy-glass-skin-in-shower-body-tone-up.webp',
        'Caryophy',
        'Còn hàng', [],
        '9,000đ',
        '20,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Dầu nóng Hàn Quốc 100ml',
        '../images/imgHang/body-care/duong-da-body/duong-the/dau-nong-han-quoc-100ml.webp',
        'Antiphlamine',
        'Còn hàng', [],
        '75,000đ',
        '105,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Dưỡng thể nước hoa Victorias Secret 236ml',
        '../images/imgHang/body-care/duong-da-body/duong-the/duong-the-nuoc-hoa-victoria-s-secret-236ml.webp',
        'Victorias Secret',
        'Còn hàng', [],
        '290,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Kem dưỡng thể Bath & Body Works 226g',
        '../images/imgHang/body-care/duong-da-body/duong-the/kem-duong-the-bath-body-works-226g.webp',
        'Bath & Body Works',
        'Còn hàng', [],
        '259,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Kem dưỡng thể ST.ives Renewing Moisturizer Collagen & Elastin',
        '../images/imgHang/body-care/duong-da-body/duong-the/kem-duong-the-st-ives-renewing-moisturizer-collagen-elastin.webp',
        'ST.ives',
        'Còn hàng', [],
        '119,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Kem dưỡng trắng da Skin Caryophy Glass Skin In Shower Body Tone Up 300g',
        '../images/imgHang/body-care/duong-da-body/duong-the/kem-duong-trang-da-skin-caryophy-glass-skin-in-shower-body-tone-up.webp',
        'Caryophy',
        'Còn hàng', [],
        '469,000đ',
        '690,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Kem Tan Mỡ Bụng Hot Burning Body Gel Missha',
        '../images/imgHang/body-care/duong-da-body/duong-the/kem-tan-mo-bung-hot-burning-body-gel-missha.webp',
        'Missha',
        'Còn hàng', [],
        '119,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Sữa dưỡng thể JM Solution Tone Up Body lotion',
        '../images/imgHang/body-care/duong-da-body/duong-the/sua-duong-the-jm-solution-tone-up-body-lotion.webp',
        'JM Solution',
        'Còn hàng', [],
        '249,000đ',
        '420,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Sữa dưỡng thể Vaseline',
        '../images/imgHang/body-care/duong-da-body/duong-the/sua-duong-the-vaseline.webp',
        'Vaseline',
        'Còn hàng', [],
        '135,000đ',
        '210,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Sữa Dưỡng Trắng Da Chateau Rouge Beauty Milk (400ml)',
        '../images/imgHang/body-care/duong-da-body/duong-the/sua-duong-trang-da-chateau-rouge-beauty-milk-400ml.webp',
        'Chateau Rouge',
        'Còn hàng', [],
        '315,000đ',
        '550,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Sữa Dưỡng Trắng Da Chateau Rouge Beauty Milk (750ml)',
        '../images/imgHang/body-care/duong-da-body/duong-the/sua-duong-trang-da-chateau-rouge-beauty-milk.webp',
        'Chateau Rouge',
        'Còn hàng', [],
        '440,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'duong-da',
        'Sữa Dưỡng Thể Bath & Body Works body Lotion',
        '../images/imgHang/body-care/duong-da-body/duong-the/su-a-duo-ng-the-bath-body-works-body-lotion.webp',
        'Bath & Body Works',
        'Còn hàng', [],
        '259,000đ',
        '400,000đ', [], []
    ),
    //sữa tắm
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Bọt tắm mềm mịn Sense Plus Moisture Body Cleansing Foam',
        '../images/imgHang/body-care/duong-da-body/sua-tam/bot-tam-mem-min-sense-plus-moisture-body-cleansing-foam.webp',
        'Sense Plus',
        'Còn hàng', [],
        '139,000đ',
        '165,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa tắm Cottage',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-cottage.webp',
        'À la mode paris',
        'Còn hàng', [],
        '165,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Dưỡng Ẩm Hương Hoa Hồng & Hoa Nhài Senka Perfect Whip For Body 500ml',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-duong-am-huong-hoa-hong-hoa-nhai-senka-perfect-whip-for-body-500ml.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '159,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Dưỡng Ẩm Senka Perfect Bubble For Body 500ml',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-duong-am-senka-perfect-bubble-for-body-500ml.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '159,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa tắm dưỡng da Happy Bath 900g',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-duong-da-happy-bath-900g.webp',
        'Happy Bath',
        'Còn hàng', [],
        '135,000đ',
        '290,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Dưỡng Trắng JM Solution Shower Tone Up Cream',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-duong-trang-jm-solution-shower-tone-up-cream.webp',
        'JM Solution',
        'Còn hàng', [],
        '310,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa tắm Le Petit Olivier',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-le-petit-olivier.webp',
        'Le Petit Olivier',
        'Hết hàng', [],
        'Liên hệ',
        '', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Tree Hut Shea Moisturizing Body Wash',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-tree-hut-shea-moisturizing-body-wash.webp',
        'Tree Hut',
        'Còn hàng', [],
        '229,000đ',
        '278,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa Tắm Truyền Trắng Medifferent In Shower Tone-Up Cream',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-truyen-trang-medifferent-in-shower-tone-up-cream.webp',
        'Medifferent',
        'Còn hàng', [],
        '310,000đ',
        '360,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Sữa tắm White Conc Body Shampoo C II',
        '../images/imgHang/body-care/duong-da-body/sua-tam/sua-tam-white-conc-body-shampoo-c-ii.webp',
        'White Conc',
        'Còn hàng', [],
        '220,000đ',
        '230,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Xà Phòng Derladie Body Cleansing Bar For Blemish Skin',
        '../images/imgHang/body-care/duong-da-body/sua-tam/xa-phong-derladie-body-cleansing-bar-for-blemish-skin.webp',
        'Derladie',
        'Còn hàng', [],
        '102,000đ',
        '145,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Xà phòng trị mụn lưng For Back',
        '../images/imgHang/body-care/duong-da-body/sua-tam/xa-phong-tri-mun-lung-for-back.webp',
        'Pelican',
        'Còn hàng', [],
        '95,000đ',
        '140,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'sua-tam',
        'Xà Phòng Trị Thâm Mông Nhật Pelican Hip Care Soap',
        '../images/imgHang/body-care/duong-da-body/sua-tam/xa-phong-tri-tham-mong-nhat-pelican-hip-care-soap.webp',
        'Pelican',
        'Còn hàng', [],
        '109,000đ',
        '170,000đ', [], []
    ),
    //khử mùi
    new Product(
        'body-care',
        'duong-da-body',
        'khu-mui',
        'Lăn Khử Mùi Angel.s Liquid Glutathione + Niacinamide Fresh Deodorant',
        '../images/imgHang/body-care/duong-da-body/khu-mui/lan-khu-mui-angel-s-liquid-glutathione-niacinamide-fresh-deodorant.webp',
        'Angel.s Liquid',
        'Còn hàng', [],
        '369,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'khu-mui',
        'Lăn khử mùi Etiaxil (mẫu mới)',
        '../images/imgHang/body-care/duong-da-body/khu-mui/lan-khu-mui-etiaxil-mau-moi.webp',
        'Etiaxil',
        'Còn hàng', [],
        '185,000đ',
        '240,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'khu-mui',
        'Lăn Khử Mùi Perspirex',
        '../images/imgHang/body-care/duong-da-body/khu-mui/lan-khu-mui-perspirex.webp',
        'Perspirex',
        'Còn hàng', [],
        '175,000đ',
        '250,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'khu-mui',
        'Lăn khử mùi Vichy 50ml',
        '../images/imgHang/body-care/duong-da-body/khu-mui/lan-khu-mui-vichy-50ml.webp',
        'Vichy',
        'Còn hàng', [],
        '196,000đ',
        '290,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'khu-mui',
        'Xịt thơm mát vùng kín Femfresh (Tặng 2 mask BNBG Vita Genic)',
        '../images/imgHang/body-care/duong-da-body/khu-mui/xit-thom-mat-vung-kin-femfresh.webp',
        'Femfresh',
        'Còn hàng', [],
        '185,000đ',
        '', [], []
    ),
    //chăm soc răng miệng
    new Product(
        'body-care',
        'duong-da-body',
        'cham-soc-rang-mieng',
        'Kem đánh răng Eucryl',
        '../images/imgHang/body-care/duong-da-body/cham-soc-rang-mieng/kem-danh-rang-eucryl.webp',
        'Eucryl',
        'Còn hàng', [],
        '49,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'cham-soc-rang-mieng',
        'Kem Đánh Răng Median Dental IQ 93%',
        '../images/imgHang/body-care/duong-da-body/cham-soc-rang-mieng/kem-danh-rang-median-dental-iq-93.webp',
        'Median',
        'Còn hàng', [],
        '45,000đ',
        '70,000đ', [], []
    ),
    // tẩy tế bào chết
    new Product(
        'body-care',
        'duong-da-body',
        'tay-te-bao-chet',
        'Tẩy da chết cơ thể Cocoon Cà phê Đắk Lắk',
        '../images/imgHang/body-care/duong-da-body/tay-te-bao-chet/tay-da-chet-co-the-cocoon-ca-phe-dak-lak.webp',
        'Cocoon',
        'Còn hàng', [],
        '115,000đ',
        '140,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'tay-te-bao-chet',
        'Tẩy Tế Bào Chết Gel Scrub Quế Hồi Coffee Cinnamon Cloves',
        '../images/imgHang/body-care/duong-da-body/tay-te-bao-chet/tay-te-bao-chet-gel-scrub-que-hoi-coffee-cinnamon-cloves.webp',
        'Krasota',
        'Còn hàng', [],
        '85,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'tay-te-bao-chet',
        'Tẩy tế bào chết toàn thân Byphasse Exfoliant Body (350ml)',
        '../images/imgHang/body-care/duong-da-body/tay-te-bao-chet/tay-te-bao-chet-toan-than-byphasse-exfoliant-body.webp',
        'Byphasse',
        'Còn hàng', [],
        '119,000đ',
        '199,000đ', [], []
    ),
    new Product(
        'body-care',
        'duong-da-body',
        'tay-te-bao-chet',
        'Tẩy tế bào chết toàn thân Organic Shop (hũ)',
        '../images/imgHang/body-care/duong-da-body/tay-te-bao-chet/tay-te-bao-chet-toan-than-organic-shop.webp',
        'Organic Shop',
        'Còn hàng', [],
        '85,000đ',
        '150,000đ', [], []
    ),
    // chăm sóc tóc
    // dầu gội xã
    new Product(
        'body-care',
        'cham-soc-toc',
        'dau-goi-xa',
        'Bộ gội xả Gừng, Thảo Mộc Weilaiya ( tặng kèm set mini 20ml)',
        '../images/imgHang/body-care/cham-soc-toc/dau-goi-xa/bo-goi-xa-gung-thao-moc-weilaiya-tang-kem-set-mini-20ml.webp',
        'Weilaiya',
        'Còn hàng', [],
        '488,000đ',
        '680,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'dau-goi-xa',
        'Bộ gội xả Hairburst',
        '../images/imgHang/body-care/cham-soc-toc/dau-goi-xa/bo-goi-xa-hairburst.webp',
        'Hairburst',
        'Còn hàng', [],
        '589,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'dau-goi-xa',
        'Cặp Dầu Gội Xả TIGI',
        '../images/imgHang/body-care/cham-soc-toc/dau-goi-xa/cap-dau-goi-xa-tigi.webp',
        'Weilaiya',
        'Còn hàng', [],
        '399,000đ',
        '690,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'dau-goi-xa',
        'Dầu Gội Khô Girlz Only',
        '../images/imgHang/body-care/cham-soc-toc/dau-goi-xa/dau-goi-kho-girlz-only.webp',
        'Girlz Only',
        'Còn hàng', [],
        '92,000đ',
        '140,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'dau-goi-xa',
        'Dầu gội, xả dưỡng tóc bóng mượt Premium Moist Tsubaki (Màu đỏ)',
        '../images/imgHang/body-care/cham-soc-toc/dau-goi-xa/bo-doi-goi-xa-duong-toc-bong-muot-premium-moist-tsubaki-mau-do.webp',
        'Tsubaki',
        'Còn hàng', [],
        '159,000đ',
        '199,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'dau-goi-xa',
        'Dầu gội/xả phục hồi ngăn rụng tóc Tsubaki Premium Repair 490ml (Màu Vàng)',
        '../images/imgHang/body-care/cham-soc-toc/dau-goi-xa/dau-goi-xa-phuc-hoi-ngan-rung-toc-tsubaki-premium-repair-490ml-mau-vang.webp',
        'Tsubaki',
        'Còn hàng', [],
        '159,000đ',
        '199,000đ', [], []
    ),
    //dưỡng tóc
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Dầu dưỡng tóc Argan oil of Morocco Natural World (100ml)',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/dau-duong-toc-argan-oil-of-morocco-natural-world-100ml.webp',
        'Natural World',
        'Còn hàng', [],
        '115,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Dầu dưỡng tóc Argan oil of Morocco Natural World (25ml)',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/dau-duong-toc-argan-oil-of-morocco-natural-world-25ml.webp',
        'Natural World',
        'Còn hàng', [],
        '58,000đ',
        '100,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Dầu dưỡng tóc phục hồi hư tổn Tsubaki Oil Perfection Hair Oil 50ml',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/dau-duong-toc-phuc-hoi-hu-ton-tsubaki-oil-perfection-hair-oil-50ml.webp',
        'Tsubaki',
        'Còn hàng', [],
        '229,000đ',
        '289,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Dưỡng tóc Miseen Scene Perfect Serum',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/duong-toc-miseen.webp',
        'Miseen Scene',
        'Còn hàng', [],
        '159,000đ',
        '170,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Mặt nạ tóc Tsubaki Premium Repair Mask 180g',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/mat-na-toc-tsubaki-premium-repair-mask-180g.webp',
        'Tsubaki',
        'Còn hàng', [],
        '199,000đ',
        '', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Nước dưỡng tóc tinh dầu bưởi Cocoon Pomelo Hair Tonic',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/nuoc-duong-toc-tinh-dau-buoi-cocoon-pomelo-hair-tonic.webp',
        'Cocoon',
        'Còn hàng', [],
        '130,000đ',
        '160,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Tinh chất dưỡng tóc Guerisson Damage Control Hair Essence',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/tinh-chat-duong-toc-guerisson-damage-control-hair-essence.webp',
        'Guerisson',
        'Còn hàng', [],
        '105,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Tinh Dầu Dưỡng Tóc Argan Hair Oil R3 RAIP',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/tinh-dau-duong-toc-argan-hair-oil-r3-raip.webp',
        'R3R',
        'Còn hàng', [],
        '85,000đ',
        '130,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Xịt dưỡng tóc Hairburst Volume & Growth Elixir 125ml ( Tặng dầu gội khô Girlzonly màu bất kì)',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/xit-duong-toc-hairburst-volume-growth-elixir-125ml-tang-dau-goi-kho-girlzonly-mau-bat-ki.webp',
        'Hairburst',
        'Còn hàng', [],
        '589,000đ',
        '980,000đ', [], []
    ),
    new Product(
        'body-care',
        'cham-soc-toc',
        'duong-toc',
        'Xịt dưỡng tóc phục hồi hư tổn Tsubaki Premium Repair Hair Water 220ml',
        '../images/imgHang/body-care/cham-soc-toc/duong-toc/xit-duong-toc-phuc-hoi-hu-ton-tsubaki-premium-repair-hair-water-220ml.webp',
        'Tsubaki',
        'Còn hàng', [],
        '145,000đ',
        '179,000đ', [], []
    ),
    // phụ kiện
    //phụ kiện makeup
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Bộ cọ trang điểm 12 cây',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/bo-co-trang-diem-12-cay.webp',
        'Cỏ Cosmetics',
        'Còn hàng', [],
        '45,000đ',
        '75,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Bộ cọ trang điểm mini 7 cây thỏ hồng',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/bo-co-trang-diem-mini-7-cay-tho-hong.webp',
        'Cỏ Cosmetics',
        'Còn hàng', [],
        '30,000đ',
        '55,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Bộ cọ Vacosi My Darling 6 cây',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/bo-co-vacosi-my-darling-6-cay-mau-do.webp',
        'Vacosi',
        'Còn hàng', [],
        '125,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ mút tán phấn mắt Vacosi',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-mut-tan-phan-mat-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '4,000đ',
        '5,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi E04',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-e04.webp',
        'Vacosi',
        'Còn hàng', [],
        '38,000đ',
        '65,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi E2E',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-e2e.webp',
        'Vacosi',
        'Còn hàng', [],
        '38,000đ',
        '65,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi F03',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-f03.webp',
        'Vacosi',
        'Còn hàng', [],
        '69,000đ',
        '115,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi F04',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-f04.webp',
        'Vacosi',
        'Còn hàng', [],
        '69,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi F06',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-f06.webp',
        'Vacosi',
        'Còn hàng', [],
        '45,000đ',
        '65,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi L02',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-l02.webp',
        'Vacosi',
        'Còn hàng', [],
        '30,000đ',
        '60,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M05',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m05.webp',
        'Vacosi',
        'Còn hàng', [],
        '55,000đ',
        '91,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M09',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m09.webp',
        'Vacosi',
        'Còn hàng', [],
        '69,000đ',
        '115,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M17',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m17.webp',
        'Vacosi',
        'Còn hàng', [],
        '65,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M21',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m21.webp',
        'Vacosi',
        'Còn hàng', [],
        '65,000đ',
        '108,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ trang điểm Vacosi M24',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-trang-diem-vacosi-m24.webp',
        'Vacosi',
        'Còn hàng', [],
        '52,000đ',
        '85,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ Vacosi M10',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-vacosi-m10.webp',
        'Vacosi',
        'Còn hàng', [],
        '65,000đ',
        '85,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'co-trang-diem',
        'Cọ Viền Đầu Dẹp Mảnh Vacosi Flat & Line Brush - E17',
        '../images/imgHang/accessory/accessory-makeup/co-trang-diem/co-vien-dau-dep-manh-vacosi-flat-line-brush-e17.webp',
        'Vacosi',
        'Còn hàng', [],
        '39,000đ',
        '42,000đ', [], []
    ),
    //phụ kiện mi
    new Product(
        'accessory',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Bấm mi cán đen Vacosi Morden Lash Curler',
        '../images/imgHang/accessory/accessory-makeup/phu-kien-mi/bam-mi-can-den-vacosi-morden-lash-curler.webp',
        'Vacosi',
        'Còn hàng', [],
        '45,000đ',
        '55,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Keo dán mi Vacosi Eyelash 3D Primer',
        '../images/imgHang/accessory/accessory-makeup/phu-kien-mi/keo-dan-mi-vacosi-eyelash-3d-primer.webp',
        'Vacosi',
        'Còn hàng', [],
        '52,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Lông mi giả Vacosi 4D Pro Eyelashes',
        '../images/imgHang/accessory/accessory-makeup/phu-kien-mi/long-mi-gia-vacosi-4d-pro-eyelashes.webp',
        'Vacosi',
        'Còn hàng', [],
        '53,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Miếng dán kích mí Vacosi Eyelid Tape',
        '../images/imgHang/accessory/accessory-makeup/phu-kien-mi/mieng-dan-kich-mi-vacosi-eyelid-tape.webp',
        'Vacosi',
        'Còn hàng', [],
        '46,000đ',
        '80,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-makeup',
        'phu-kien-mi',
        'Miếng dán mi lưới Vacosi Invisible Fiber Tape VM16 ( 120 miếng/hộp)',
        '../images/imgHang/accessory/accessory-makeup/phu-kien-mi/mieng-dan-mi-luoi-vacosi-invisible-fiber-tape-vm16-120-mieng-hop.webp',
        'Vacosi',
        'Còn hàng', [],
        '52,000đ',
        '85,000đ', [], []
    ),
    //phụ kiện cá nhân
    //phụ kiện phòng tắm
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô nơ có viền ren',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-no-co-vien-ren.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '35,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô nơ Cool',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-rua-mat-no-cool.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '35,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô nơ Line Friends',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-no-line-friends.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '55,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô rửa mặt tai thỏ cà rốt',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-rua-mat-tai-tho-ca-rot.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '35,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Băng đô tai thỏ',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bang-do-tai-tho.webp',
        'No Brand',
        'Còn hàng', [],
        '25,000đ',
        '45,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Bộ chiết mỹ phẩm',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bo-chiet-my-pham.webp',
        'No Brand',
        'Còn hàng', [],
        '55,000đ',
        '70,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Bông Phấn Hồ Lô Vacosi Pear Blender - BP06',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bong-phan-ho-lo-vacosi-pear-blender-bp06.webp',
        'Vacosi',
        'Còn hàng', [],
        '35,000đ',
        '', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Bông phấn tròn Vacosi Small Round Puff',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bong-phan-tron-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '15,000đ',
        '', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Bông tán Cushion Vacosi Accessories',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/bong-cushion-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '18,000đ',
        '', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Chai chiết mỹ phẩm',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/chai-chiet-my-pham.webp',
        'Cỏ Cosmetics',
        'Hết hàng', [],
        'Liên hệ',
        '', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Dao cạo mày Ailin',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/dao-cao-may-ailin.webp',
        'Cỏ Cosmetics',
        'Còn hàng', [],
        '8,000đ',
        '14,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Dao cạo tỉa lông mày Nalamei',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/dao-cao-tia-long-may-nalamei.webp',
        'Nalamei',
        'Còn hàng', [],
        '12,000đ',
        '25,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Dao cạo tỉa lông mày Vacosi Eyebrow Knife',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/dao-cao-tia-long-may-vacosi-eyebrow-knife-dc06.webp',
        'Vacosi',
        'Còn hàng', [],
        '35,000đ',
        '49,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Dụng Cụ Rửa Mặt Vacosi Natural Studio Boover Cleanser Hình Bạch Tuộc',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/dung-cu-rua-mat-vacosi-natural-studio-boover-cleanser-hinh-bach-tuoc.webp',
        'Vacosi',
        'Còn hàng', [],
        '46,000đ',
        '68,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Gương mini kèm lược',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/guong-mini-kem-luoc.webp',
        'Cỏ Cosmetics',
        'Còn hàng', [],
        '15,000đ',
        '25,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Miếng Rửa Mặt Nhật Bản Loven Making Cleansing Pad',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/chai-chiet-my-pham.webp',
        'Loven',
        'Còn hàng', [],
        '42,000đ',
        '70,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Miếng rửa mặt Vacosi Accessories Beauty Tool Series',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/mieng-rua-mat-vacosi-accessories-beauty-tool-series.webp',
        'Vacosi',
        'Còn hàng', [],
        '35,000đ',
        '40,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Mút tán Real Techniques Limited Edition',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/mut-tan-real-techniques-limited-edition.webp',
        'Real Techniques',
        'Còn hàng', [],
        '119,000đ',
        '189,000đ', [], []
    ), new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Mút Tán Tam Giác 3 Miếng Vacosi',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/mut-tan-tam-giac-3-mieng-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '15,000đ',
        '25,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Túi đựng mỹ phẩm Travel Multi Pouch',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/tui-dung-my-pham-travel-multi-pouch.webp',
        'No Brand',
        'Còn hàng', [],
        '39,000đ',
        '59,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Túi đựng mỹ phẩm Washbag',
        '../images/imgHang/accessory/accessory-personal/phu-kien-phong-tam/tui-dung-my-pham-washbag.webp',
        'Washbag',
        'Còn hàng', [],
        '39,000đ',
        '45,000đ', [], []
    ),
    //phụ kiện cá nhân
    //phụ kiện cá nhân
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-ca-nhan',
        'Bấm móng tay Vacosi',
        '../images/imgHang/accessory/accessory-personal/phu-kien-ca-nhan/bam-mong-tay-vacosi.webp',
        'Vacosi',
        'Còn hàng', [],
        '35,000đ',
        '60,000đ', [], []
    ),
    new Product(
        'accessory',
        'phu-kien-ca-nhan',
        'phu-kien-phong-tam',
        'Cây nặn mụn Vacosi NM01',
        '../images/imgHang/accessory/accessory-personal/phu-kien-ca-nhan/cay-nan-mun-vacosi-nm01-1.webp',
        'Vacosi',
        'Còn hàng', [],
        '15,000đ',
        '20,000đ', [], []
    ),

    //cho nam
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Chấm Mụn dành cho nam MdoC AC Solution Powder Spot 15ml',
        '../images/imgHang/man/cham-mun-danh-cho-nam-mdoc-ac-solution-powder-spot-15ml.webp',
        'MdoC',
        'Còn hàng', [],
        '319,000đ',
        '439,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Kem dưỡng da ban đêm dành cho nam Mdoc Night Effects Whitening Gel 100g',
        '../images/imgHang/man/kem-duong-da-ban-dem-danh-cho-nam-mdoc-night-effects-whitening-gel-100g.webp',
        'MdoC',
        'Còn hàng', [],
        '549,000đ',
        '729,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Kem dưỡng trắng Mdoc Whitening Tone Up Cream 50 ml',
        '../images/imgHang/man/kem-duong-trang-mdoc-whitening-tone-up-cream-50-ml.webp',
        'MdoC',
        'Còn hàng', [],
        '499,000đ',
        '719,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Lotion dưỡng trắng dành cho nam Mdoc Whitening Skin+Lotion',
        '../images/imgHang/man/lotion-duong-trang-danh-cho-nam-mdoc-whitening-skin-lotion.webp',
        'MdoC',
        'Còn hàng', [],
        '615,000đ',
        '749,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Nước cân bằng dành cho nam MdoC Sebum Strike Toner',
        '../images/imgHang/man/nuoc-hoa-hong-danh-cho-nam-mdoc-sebum-strike-toner.webp',
        'MdoC',
        'Còn hàng', [],
        '469,000đ',
        '659,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Nước hoa dành cho nam Gucci Guilty Pour Homme ADT 15ml',
        '../images/imgHang/man/nuoc-hoa-danh-cho-nam-gucci-guilty-pour-homme-adt-15ml.webp',
        'Gucci',
        'Còn hàng', [],
        '560,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Serum dưỡng da dành cho nam MdoC Sebum Strike Serum',
        '../images/imgHang/man/serum-duong-da-danh-cho-nam-mdoc-sebum-strike-serum.webp',
        'MdoC',
        'Còn hàng', [],
        '499,000đ',
        '669,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Sữa Rửa Mặt dành cho nam MdoC Blackhead Perfect Scrub Foam 150g',
        '../images/imgHang/man/sua-rua-mat-danh-cho-nam-mdoc-blackhead-perfect-scrub-foam-150g.webp',
        'MdoC',
        'Còn hàng', [],
        '299,000đ',
        '479,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Sữa rửa mặt dành cho nam MdoC Relief Foam Cleasing',
        '../images/imgHang/man/sua-rua-mat-danh-cho-nam-mdoc-relief-foam-cleasing-tang-mini-size-bat-ki-voi-chai-full-150gr.webp',
        'MdoC',
        'Còn hàng', [],
        '299,000đ',
        '399,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Tinh chất chống nắng dành cho nam MdoC Sunshine UV Solution Essence 50ml',
        '../images/imgHang/man/tinh-chat-chong-nang-danh-cho-nam-mdoc-sunshine-uv-solution-essence-50ml.webp',
        'MdoC',
        'Còn hàng', [],
        '539,000đ',
        '659,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Tinh chất dưỡng trắng dành cho nam Mdoc Whitening Essence 100ml',
        '../images/imgHang/man/tinh-chat-duong-trang-danh-cho-nam-mdoc-whitening-essence-100ml.webp',
        'MdoC',
        'Còn hàng', [],
        '569,000đ',
        '749,000đ', [], []
    ),
    new Product(
        'man',
        'cho-nam',
        'cho-nam',
        'Tinh chất thu gọn lỗ chân lông dành cho nam MdoC Skin Pore Tightener 2.0',
        '../images/imgHang/man/tinh-chat-thu-gon-lo-chan-long-danh-cho-nam-mdoc-skin-pore-tightener-2-0.webp',
        'MdoC',
        'Còn hàng', [],
        '429,000đ',
        '619,000đ', [], []
    ),
    //nước hoa
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa dành cho nam Gucci Guilty Pour Homme ADT 15ml',
        '../images/imgHang/perfume/nuoc-hoa-danh-cho-nam-gucci-guilty-pour-homme-adt-15ml.webp',
        'Gucci',
        'Còn hàng', [],
        '560,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa dành cho nữ Gucci Guilty Pour Femme EDP 15ml',
        '../images/imgHang/perfume/nuoc-hoa-danh-cho-nu-gucci-guilty-pour-femme-edp-15ml.webp',
        'Gucci',
        'Còn hàng', [],
        '590,000đ',
        '750,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa Dior J’adore Eau De Parfum (5ml)',
        '../images/imgHang/perfume/nuoc-hoa-miss-dior-mini-5ml.webp',
        'Dior',
        'Còn hàng', [],
        '158,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa Gucci Bloom Nettare Di Fiori EDP Intense 5ml (nâu)',
        '../images/imgHang/perfume/nuoc-hoa-nu-gucci-bloom-profumo-di-fiori-vang.webp',
        'Gucci',
        'Còn hàng', [],
        '310,000đ',
        '470,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước Hoa Miss Dior (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-miss-dior-mini-5ml.webp',
        'Dior',
        'Còn hàng', [],
        '158,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nam 212 Men Sexy Carolina Herrera EDT 100ml',
        '../images/imgHang/perfume/nuoc-hoa-nam-212-men-sexy-carolina-herrera-edt-100ml.webp',
        'Carolina Herrera',
        'Còn hàng', [],
        '1,380,000đ',
        '1,850,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nam Chanel Bleu De Chanel EDP 100ml',
        '../images/imgHang/perfume/nuoc-hoa-nam-chanel-bleu-de-chanel-edp-100ml.webp',
        'Chanel',
        'Còn hàng', [],
        '3,800,000đ',
        '4,500,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nam Dolce & Gabbana Light Blue Pour Homme EDT (Mini 4.5ml)',
        '../images/imgHang/perfume/nuoc-hoa-nam-dolce-gabbana-light-blue-pour-homme-edt-mini-4-5ml.webp',
        'Dolce & Gabbana',
        'Còn hàng', [],
        '219,000đ',
        '300,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nam Hugo Boss Man EDT 125ml',
        '../images/imgHang/perfume/nuoc-hoa-nam-hugo-boss-man-edt-125ml.webp',
        'Hugo Boss',
        'Còn hàng', [],
        '830,000đ',
        '1,200,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước Hoa Nam MR.Burberry EDP (mini 2ml)',
        '../images/imgHang/perfume/nuoc-hoa-nam-mr-burberry-edp-mini-2ml.webp',
        'MR.Burberry',
        'Còn hàng', [],
        '45,000đ',
        '52,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nam Versace Dylan Blue Pour Homme (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-nam-versace-dylan-blue-pour-homme-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '119,000đ',
        '180,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Armaf Club de Nuit Woman EDP',
        '../images/imgHang/perfume/nuoc-hoa-nu-armaf-club-de-nuit-woman-edp.webp',
        'Armaf',
        'Còn hàng', [],
        '799,000đ',
        '1,039,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Dolce & Gabbana The One EDP',
        '../images/imgHang/perfume/nuoc-hoa-nu-dolce-gabbana-the-one-edp-75ml.webp',
        'Dolce & Gabbana',
        'Còn hàng', [],
        '229,000đ',
        '499,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Flower By Kenzo EDP',
        '../images/imgHang/perfume/nuoc-hoa-nu-flower-by-kenzo-edp.webp',
        'Kenzo',
        'Còn hàng', [],
        '159,000đ',
        '209,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Gucci Bloom Profumo Di Fiori (vàng)',
        '../images/imgHang/perfume/nuoc-hoa-nu-flower-by-kenzo-edp.webp',
        'Gucci',
        'Còn hàng', [],
        '439,000đ',
        '525,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Moschino Toy 2 EDP',
        '../images/imgHang/perfume/nuoc-hoa-nu-moschino-toy-2-edp.webp',
        'Moschino',
        'Còn hàng', [],
        '175,000đ',
        '390,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Narciso Rodriguez Pure Musc mini 4ml',
        '../images/imgHang/perfume/nuoc-hoa-nu-narciso-rodriguez-pure-musc-mini-4ml.webp',
        'Narciso Rodriguez',
        'Còn hàng', [],
        '208,000đ',
        '300,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Paleta Perfume',
        '../images/imgHang/perfume/nuoc-hoa-nu-paleta-perfume.webp',
        'Paleta',
        'Còn hàng', [],
        '146,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Versace Bright Crystal EDT',
        '../images/imgHang/perfume/nuoc-hoa-nu-moschino-toy-2-edp.webp',
        'Versace',
        'Còn hàng', [],
        '1,290,000đ',
        '', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Versace Crystal Noir EDT (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-nu-versace-crystal-noir-edt-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '119,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa nữ Versace Yellow Diamond (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-nu-versace-yellow-diamond-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '140,000đ',
        '220,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa Pinker Bell Korea',
        '../images/imgHang/perfume/nuoc-hoa-nu-versace-crystal-noir-edt-mini-5ml.webp',
        'Perfume Holic',
        'Còn hàng', [],
        '225,000đ',
        '380,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa Versace Bright Crystal (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-versace-bright-crystal-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '139,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa Versace Bright Crystal Absolu (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-versace-bright-crystal-absolu-mini-5ml.webp',
        'Perfume Holic',
        'Còn hàng', [],
        '190,000đ',
        '250,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa Versace Dylan Blue Pour Femme (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-versace-dylan-blue-pour-femme-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '155,000đ',
        '260,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước hoa Versace Eros for Men EDT (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-versace-eros-for-men-edt-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '115,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước Hoa Versace Pour Homme (mini 5ml)',
        '../images/imgHang/perfume/nuoc-hoa-versace-pour-homme-mini-5ml.webp',
        'Versace',
        'Còn hàng', [],
        '115,000đ',
        '200,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Nước Hoa Vùng Kín Re:p Natural Herb Inner Balance 5ml',
        '../images/imgHang/perfume/nuoc-hoa-vung-kin-re-p-natural-herb-inner-balance-5ml.webp',
        'Re:p',
        'Còn hàng', [],
        '399,000đ',
        '', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Xịt thơm quần áo Fabric Perfume',
        '../images/imgHang/perfume/xit-thom-quan-ao-fabric-perfume.webp',
        'Fabric',
        'Còn hàng', [],
        '82,000đ',
        '150,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Xịt Thơm Toàn Thân Body Bath & Body Works Fragrance Mist',
        '../images/imgHang/perfume/xit-thom-toan-than-body-bath-body-works-fragrance-mist.webp',
        'Bath & Body Works',
        'Còn hàng', [],
        '259,000đ',
        '400,000đ', [], []
    ),
    new Product(
        'perfume',
        'nuoc-hoa',
        'nuoc-hoa',
        'Xịt thơm Victoria.s Secret Fragrance Mist',
        '../images/imgHang/perfume/xit-thom-victoria-s-secret-fragrance-mist.webp',
        'Victoria.s Secret',
        'Còn hàng', [],
        '290,000đ',
        '450,000đ', [], []
    ),
    //săn quà
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Siêu huyết thanh xóa mụn Derladie Herbal Ampoule for Blemish',
        '../images/imgHang/gitf/huyet-thanh-derladie-tri-mun_e60a2f760beb4086932387d2d909e131_large.webp',
        'Derladie',
        'Còn hàng', [],
        '399,000đ',
        '630,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Nước cân bằng & Dưỡng ẩm Senka Deep Moist Lotion I',
        '../images/imgHang/gitf/nuoc-can-bang-duong-am-senka-deep-moist-lotion-i.webp',
        'Senka',
        'Còn hàng', [],
        '169,000đ',
        '300,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Gel rửa mặt tẩy trang 2 trong 1 Senka Perfect Clear Cleanse 170ml',
        '../images/imgHang/gitf/gel-rua-mat-tay-trang-2-trong-1-senka-perfect-clear-cleanse-170ml.webp',
        'Senka',
        'Còn hàng', [],
        '199,000đ',
        '220,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Dầu tẩy trang Senka A.L.L Clear Oil',
        '../images/imgHang/gitf/dau-tay-trang-senka-a-l-l-clear-oil.webp',
        'Senka',
        'Còn hàng', [],
        '259,000đ',
        '420,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem dưỡng trắng da nâng tông 3 trong 1 Senka White Beauty Cream 100gr',
        '../images/imgHang/gitf/kem-duong-trang-da-nang-tong-3-trong-1-senka-white-beauty-cream-100gr.webp',
        'Senka',
        'Còn hàng', [],
        '265,000đ',
        '290,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem dưỡng da ban ngày Senka White Beauty Glow UV Cream 50g',
        '../images/imgHang/gitf/kem-duong-da-ban-ngay-senka-white-beauty-glow-uv-cream-50g.webp',
        'Senka',
        'Còn hàng', [],
        '229,000đ',
        '370,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Gel sữa chống nắng Senka Perfect UV Gel 80ml',
        '../images/imgHang/gitf/gel-sua-chong-nang-senka-perfect-uv-gel-80ml-1.webp',
        'Senka',
        'Còn hàng', [],
        '175,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'CC Serum trắng da Senka White Beauty Serum in CC 40gr',
        '../images/imgHang/gitf/cc-serum-trang-da-senka-white-beauty-serum-in-cc-40gr.webp',
        'Senka',
        'Còn hàng', [],
        '179,000đ',
        '205,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Sữa chống nắng Anessa Mild Milk 60ml',
        '../images/imgHang/gitf/sua-chong-nang-anessa-mild-milk-60ml.webp',
        'Anessa',
        'Còn hàng', [],
        '499,000đ',
        '685,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Sữa chống nắng Anessa Perfect UV Suncreen Skincare Milk A 60ml',
        '../images/imgHang/gitf/sua-chong-nang-anessa-perfect-uv-suncreen-skincare-milk-a-60ml.webp',
        'Anessa',
        'Còn hàng', [],
        '525,000đ',
        '685,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem chống nắng Anessa',
        '../images/imgHang/gitf/kem-chong-nang-anessa.webp',
        'Anessa',
        'Còn hàng', [],
        '419,000đ',
        '550,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Gel rửa mặt dịu nhẹ Senka Perfect Gel Gentle wash 100g',
        '../images/imgHang/gitf/gel-rua-mat-diu-nhe-senka-perfect-gel-gentle-wash-100g.webp',
        'Senka',
        'Còn hàng', [],
        '109,000đ',
        '175,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Nước sữa tẩy trang 2 lớp Senka A.L.L Clear Milky Water 230ml',
        '../images/imgHang/gitf/nuoc-sua-tay-trang-2-lop-senka-a-l-l-clear-milky-water-230ml.webp',
        'Senka',
        'Còn hàng', [],
        '109,000đ',
        '199,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Xịt dưỡng tóc phục hồi hư tổn Tsubaki Premium Repair Hair Water 220ml',
        '../images/imgHang/gitf/xit-duong-toc-phuc-hoi-hu-ton-tsubaki-premium-repair-hair-water-220ml.webp',
        'Tsubaki',
        'Còn hàng', [],
        '145,000đ',
        '179,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Tinh chất chống nắng Senka Perfect UV Essence',
        '../images/imgHang/gitf/tinh-chat-chong-nang-senka-perfect-uv-essence.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '240,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Sữa chống nắng Senka Perfect UV Milk N 40ml',
        '../images/imgHang/gitf/sua-chong-nang-senka-perfect-uv-milk-n-40ml.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '160,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Sữa Tắm Dưỡng Ẩm Senka Perfect Bubble For Body 500ml',
        '../images/imgHang/gitf/sua-tam-duong-am-senka-perfect-bubble-for-body-500ml.webp',
        'Senka',
        'Còn hàng', [],
        '149,000đ',
        '159,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem xả Tsubaki 180gr',
        '../images/imgHang/gitf/kem-xa-tsubaki-180gr.webp',
        'Tsubaki',
        'Còn hàng', [],
        '149,000đ',
        '189,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Dầu gội/xả phục hồi ngăn rụng tóc Tsubaki Premium Repair 490ml (Màu Vàng)',
        '../images/imgHang/gitf/dau-goi-xa-phuc-hoi-ngan-rung-toc-tsubaki-premium-repair-490ml-mau-vang.webp',
        'Tsubaki',
        'Còn hàng', [],
        '159,000đ',
        '199,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Dầu gội, xả dưỡng tóc bóng mượt Premium Moist Tsubaki (Màu đỏ)',
        '../images/imgHang/gitf/bo-doi-goi-xa-duong-toc-bong-muot-premium-moist-tsubaki-mau-do.webp',
        'Tsubaki',
        'Còn hàng', [],
        '159,000đ',
        '199,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Gel sữa chống nắng Senka Perfect UV Gel 80ml',
        '../images/imgHang/gitf/gel-sua-chong-nang-senka-perfect-uv-gel-80ml-1.webp',
        'Senka',
        'Còn hàng', [],
        '175,000đ',
        '190,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Mặt nạ ngủ Senka Deep Moist Gel Cream 50gr',
        '../images/imgHang/gitf/mat-na-ngu-senka-deep-moist-gel-cream-50gr.webp',
        'Senka',
        'Còn hàng', [],
        '179,000đ',
        '290,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Nước dưỡng làm mềm & trắng da Senka White Beauty Lotion I',
        '../images/imgHang/gitf/nuoc-duong-lam-mem-trang-da-senka-white-beauty-lotion-i.webp',
        'Senka',
        'Còn hàng', [],
        '170,000đ',
        '300,000đ', [], []
    ),

    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Mặt nạ tóc Tsubaki Premium Repair Mask 180g',
        '../images/imgHang/gitf/mat-na-toc-tsubaki-premium-repair-mask-180g.webp',
        'Tsubaki',
        'Còn hàng', [],
        '199,000đ',
        '', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem dưỡng trắng da ban đêm Senka White Beauty Glow Gel Cream 50gr',
        '../images/imgHang/gitf/kem-duong-trang-da-ban-dem-senka-white-beauty-glow-gel-cream-50gr.webp',
        'Senka',
        'Còn hàng', [],
        '229,000đ',
        '249,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Serum dưỡng trắng da Senka White Beauty 35g',
        '../images/imgHang/gitf/serum-duong-trang-da-senka-white-beauty-35g.webp',
        'Senka',
        'Còn hàng', [],
        '229,000đ',
        '360,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Dầu dưỡng tóc phục hồi hư tổn Tsubaki Oil Perfection Hair Oil 50ml',
        '../images/imgHang/gitf/dau-duong-toc-phuc-hoi-hu-ton-tsubaki-oil-perfection-hair-oil-50ml.webp',
        'Tsubaki',
        'Còn hàng', [],
        '229,000đ',
        '289,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Kem nền Trang Điểm Chống Nắng Anessa Perfect UV Sunscreen Skincare BB Foundation SPF50+/ PA++++ 25ml',
        '../images/imgHang/gitf/kem-nen-trang-diem-chong-nang-anessa-perfect-uv-sunscreen-skincare-bb-foundation-spf50-pa-25ml.webp',
        'Anessa',
        'Còn hàng', [],
        '289,000đ',
        '375,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Bộ đôi gội + xả Sạch Dầu Mát Lạnh Tsubaki Premium Cool Set (490ml/chai)',
        '../images/imgHang/gitf/bo-doi-goi-xa-sach-dau-mat-lanh-tsubaki-premium-cool-set-490ml-chai.webp',
        'Tsubaki',
        'Còn hàng', [],
        '309,000đ',
        '', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Xịt chống nắng Anessa Perfect UV Sunscreen Skincare Spray A 60gr',
        '../images/imgHang/gitf/xit-chong-nang-anessa-perfect-uv-sunscreen-skincare-spray-a-60gr.webp',
        'Anessa',
        'Còn hàng', [],
        '330,000đ',
        '435,000đ', [], []
    ),
    new Product(
        'gift',
        'thich-la-tang',
        'thich-la-tang',
        'Xịt Chống Nắng Toàn Thân Anessa Perfect UV Sunscreen Bubble Spray A SPF50+/PA++++',
        '../images/imgHang/gitf/xit-chong-nang-toan-than-anessa-perfect-uv-sunscreen-bubble-spray-a-spf50-pa.webp',
        'Anessa',
        'Còn hàng', [],
        '425,000đ',
        '509,000đ', [], []
    ),
)



localStorage.setItem("products", JSON.stringify(array))