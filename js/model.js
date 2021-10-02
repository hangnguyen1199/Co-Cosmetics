var array= [];
//mảng lưu các product
var id = 1
function Product(department,category,belongTo,productName,mainAvatar,brand,status,productType,priceSell,realPrice,moreImage,description){//constructor function
    this.productID = id++,//cấp phát tự động 
    this.url=[department,category,belongTo],
    this.productName = productName,
    this.mainAvatar = mainAvatar,
    this.brand = brand,
    this.status= status,
    this.productType = productType,
    this.priceSell = priceSell,
    this.realPrice= realPrice,
    this.moreImage = moreImage,
    this.description = description
}

array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Sample Kem nền Maybelline Fit Me Matte Poreless Foundation',
        '../images/hocImage/kemnen/kemnen1/626_1_951ce1c698da4a8ea260d0752d02a0ea_large.png',
        'Maybeline',
        'Còn hàng',
        ['TONE 128', 'TONE 120'],
        '35000',
        '75000',
        [],
        []
    ),
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Missha Magic Cushion Cover Lasting SPF50+/PA+++',
        '../images/hocImage/kemnen/kemnen1/missha-10_d714e435464949f79582b9feb69e4d45_large.jpg',
        'Missha',
        'Còn hàng',
        ['cover lasting 21', 'cover lasting 21','moist up 21' , 'moist up 23'],
        '119000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Missha Đỏ Velvet Finish Cushion',
        '../images/hocImage/kemnen/kemnen1/misha-2_4b1dec1774b84dedbdd711c1ae4365ba_large.jpg',
        'Missha',
        'Còn hàng',
        ['TONE 21', 'TONE 23'],
        '135000',
        '179000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền Karadium Main Actress Cover Foundation',
        '../images/hocImage/kemnen/kemnen1/chung_660904694eac431da50bc2f593e0f34e_large.jpg',
        'Karadium ',
        'Còn hàng',
        ['TONE 128', 'TONE 120'],
        '195000',
        '280000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem Nền Maybelline Fit Me',
        '../images/hocImage/kemnen/kemnen1/kem-ne-n-fit-me_cad031634310419fada55ce71389ada3_large.jpg',
        'Maybeline',
        'Còn hàng',
        ['TONE 128', 'TONE 120'],
        '205000',
        '240000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền Maybelline Super Stay 24H Full Coverage Foundation',
        '../images/hocImage/kemnen/kemnen1/maybelline-superstay-24h-full-coverage-foundation-120_6fcc5907410d4503a9e236fa398d502e_large.png',
        'Maybeline',
        'Còn hàng',
        ['120 classic irovy', '128 warm nude'],
        '229000',
        '299000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước Lemonade Matte Addict Dual Cushion',
        '../images/hocImage/kemnen/kemnen1/phan_nuoc_lemonade_matte_addict_dual_cushion_a62054fb93fe4e84a22820bd2c9b29a6_large.png',
        'Lemonade',
        'Còn hàng',
        ['a01 light', 'a02 natural'],
        '325000',
        '459000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước A.Black All Day Perfect Cover Cushion SPF 47 PA++',
        '../images/hocImage/kemnen/kemnen1/phan-nuoc-ablack-all-day-perfect-cover-cushion-spf-47-pa__2__1acc50928fe34098b2ddc7ff6d780d5b_large.png',
        'A.Black ',
        'Còn hàng',
        ['TONE 02', 'TONE 03'],
        '265000',
        '325000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền L’Oreal Paris True Match Super Blendable Foundation',
        '../images/hocImage/kemnen/kemnen1/loreal-1_12c995dd921d49bcb54e4c7fe8d0dd11_large.jpg',
        ' L\'Oreal Paris',
        'Còn hàng',
        ['TONE g1', 'TONE g2','TONE n1', 'TONE f1'],
        '269000',
        '308000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Chống Nắng Lilybyred Cotton Blur Cushion',
        '../images/hocImage/kemnen/kemnen1/1_a60a4b1cc94e4ef3b175ebd9612b8dba_large.png',
        'Lilybyred',
        'Còn hàng',
        ['21 nude cotton', '23 natural cotton'],
        '279000',
        '269000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Black Rouge Peach Cover Velvet Cushion',
        '../images/hocImage/kemnen/kemnen1/blackrouge-peach-8.jpg_c9e2869eb6e849f4b4a1323714778ca5_large.png',
        'Black Rouge ',
        'Còn hàng',
        ['cp01', 'cp02'],
        '288000',
        '345000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Lime Real Cover Pink Cushion',
        '../images/hocImage/kemnen/kemnen1/phan_nuoc_lime_real_cover_pink_cushion_bb732e272a5d44568a0bd42041a6c2f6_large.png',
        ' Lime Cosmetics ',
        'Còn hàng',
        ['vỏ trắng tone 10', 'vỏ trắng tone 20'],
        '289000',
        '320000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước Lime V Collagen Ample Cushion',
        '../images/hocImage/kemnen/kemnen2/phan_nuoc_lime_v_collagen_ample_cushion_d59d4d55ffb74d9a8e19bde775794d83_large.png',
        'Lime Cosmetics',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '289000',
        '320000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước AprilSkin Real Calendula Ampoule Glow Cushion',
        '../images/hocImage/kemnen/kemnen2/phan_nuoc_aprilskin_real_calendula_ampoule_glow_cushion_6015e4e1525c49ddad7e166a00f5185a_large.png',
        ' April Skin',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '295000',
        '',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước Klavuu Cushion Blue Pearlsation Hight Coverage (vỏ xanh)',
        '../images/hocImage/kemnen/kemnen2/phan_nuoc_klavuu_cushion_blue_pearlsation_hight_coverage__vo_xanh__88f9c97c73f249769b582af593ebc9fd_large.png',
        'Klavuu ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '299000',
        '325000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước April Skin Black Magic Snow Cushion (vỏ đen)',
        '../images/hocImage/kemnen/kemnen2/409_1_f6f18c36b4e94866bff6f7d883c805b1_large.png',
        ' April Skin',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '309000',
        '500000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền April Skin Perfect Magic Cover Fit Foundation',
        '../images/hocImage/kemnen/kemnen2/kem_neefn_ef488147b52049c998e134a7b7387ac0_large.jpg',
        'April Skin ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '309000',
        '450000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        '[Phiên bản giới hạn] Phấn nước Laneige Neo Cushion Matte',
        '../images/hocImage/kemnen/kemnen2/laneige-voxanh_be1a059eb2b4424db25b1edb4cb15fc3_large.png',
        'Laneige ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '315000',
        '410000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Kem nền Lemonade Perfect Couple Dual Foundation',
        '../images/hocImage/kemnen/kemnen2/kem-nen-lemonade-perfect-couple-dual-foundation__2__10f547b1eda14a87912b01644a931f21_large.jpg',
        'Lemonade ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '329000',
        '459000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn nước Klavuu Urban Cushion Pearlsation Hight Coverage (vỏ xám)',
        '../images/hocImage/kemnen/kemnen2/phan_nuoc_klavuu_urban_cushion_pearlsation_hight_coverage__vo_xam__b6fa27ccebb7470ebfda39594a825a33_large.png',
        'Klavuu',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '330000',
        '400000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        '[Phiên bản Joseph Stacey] Phấn nước Laneige Neo Cushion (kèm lõi)',
        '../images/hocImage/kemnen/kemnen2/laneige-vodo-5_48673248b8994f1fb9581669bdaeafd4_large.jpg',
        'Laneige ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '479000',
        '790000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'cushion-1',
        'Phấn Nước Laneige Neo Cushion Matte (kèm lõi)',
        '../images/hocImage/kemnen/kemnen2/394_a7eb7a9997d144ad918fa5049c5e9f4f_large.png',
        'Laneige ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '485000',
        '540000',
        [],
        []
    )
)
///che-khuyet-diem
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'che-khuyet-diem',
        'Bút Che Khuyết Điểm Innisfree Mineral Stick Concealer',
        '../images/hocImage/chekhuyetdiem/chekhuyetdiem1/but_che_khuyet_diem_innisfree_mineral_stick_concealer_c3b28347174d484bb18be06ae6de0d43_large.png',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '125000',
        '190000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'che-khuyet-diem',
        'Kem che khuyết điểm Maybelline Fit Me Concealer',
        '../images/hocImage/chekhuyetdiem/chekhuyetdiem1/kem_che_khuyet_diem_maybelline_fit_me_concealer_73f14fd513e3444db457fb17eef345ad_large.png',
        'Maybelline',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '142000',
        '155000',
        [],
        []
    )
)
//phan-phu-phan-nen
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'phan-phu-phan-nen',
        'Phấn Nền Maybelline Fit Me Skin Fit Powder Foundation',
        '../images/hocImage/phannen/phannen1/phan_nen_maybelline_fit_me_skin_fit_powder_foundation_7421bf91ba0649cd81f5e987127a6cb1_large.png',
        'Maybelline',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '199000',
        '205000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'phan-phu-phan-nen',
        'Phấn Phủ Dạng Nén Missha Pro-Touch Powder Pact SPF25/PA++',
        '../images/hocImage/phannen/phannen1/1__1__dda5f2c4ff9749d09e1e3a48b4853d0c_large.png',
        'Missha',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '185000',
        '235000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'phan-phu-phan-nen',
        'Phấn phủ kiềm dầu Innisfree No Sebum',
        '../images/hocImage/phannen/phannen1/phan_phu_kiem_dau_innisfree_no_sebum_eccd20c0d66b4bad8911f360f8da3f0f_large.png',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '95000',
        '',
        [],
        []
    )
)

//ma-hong
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'ma-hong',
        'Má Hồng Innisfree Jelly Cheek',
        '../images/hocImage/mahong/mahong1/ma_hong_innisfree_jelly_cheek_d45a9ea296904ab093858126affae573_large.png',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '138000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'ma-hong',
        'Phấn Má Hồng Lilybyred Luv Beam Cheek',
        '../images/hocImage/mahong/mahong1/00_c645dfaf9e7246978c59ae4e9bdaf514_large.png',
        'Lilybyred',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '169000',
        '238000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'ma-hong',
        'Phấn má hồng Sivanna Mini Bowknot Blusher',
        '../images/hocImage/mahong/mahong1/phan_ma_hong_sivanna_mini_bowknot_blusher_17dba65ad03641f38ba7d02474e7c7bd_large.png',
        'Sivanna',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '78000',
        '120000',
        [],
        []
    )
)
//tao-khoi-highlighter
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'tao-khoi-highlighter',
        'Phấn tạo khối Black Rouge Up and Down Triple Contouring',
        '../images/hocImage/taokhoi/taokhoi1/phan_tao_khoi_black_rouge_up_and_down_triple_contouring_c259f93976c64cb9a8fcc458e97de32b_large.png',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '168000',
        '220000',
        [],
        []
    )
)
//xit-khoang-nen
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt dưỡng da Klairs Fundamental Ampule Mist 125ml',
        '../images/hocImage/xitkhoan/xitkhoan1/xit_duong_da_klairs_fundamental_ampule_mist_125ml_640f770f52bf42febfb18c833f2d4ee3_large.png',
        'Klairs',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '379000',
        '560000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt Khoáng Cấp Nước Dưỡng Ẩm Eau Thermale Jonzac Thermal Spring Water',
        '../images/hocImage/xitkhoan/xitkhoan1/xit_khoang_cap_nuoc_duong_am_eau_thermale_jonzac_thermal_spring_water_cb17c3061d59405c83f2d54140f5763b_large.png',
        'Jonzac',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '315000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt khoáng dưỡng da Vichy Eau Thermale Mineralisante',
        '../images/hocImage/xitkhoan/xitkhoan1/xit_khoang_duong_da_vichy_eau_thermale_mineralisante_ecb696fb645a4649a2b85c3d31e981e3_large.png',
        'Vichy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '130000',
        '170000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt khoáng Evoluderm',
        '../images/hocImage/xitkhoan/xitkhoan1/xit_khoang_evoluderm_04c2914c896d453aa87c1d7c056b232b_large.png',
        'Evoluderm',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '95000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'face-make-up',
        'xit-khoang-nen',
        'Xịt khoáng La Roche-Posay Thermal Spring Water Sensitive Skin (Chai trắng)',
        '../images/hocImage/xitkhoan/xitkhoan1/xit_khoang_la_roche-posay_498b40e15c6b406f896bfedf188bc0f5_large.png',
        'La Roche-Posay',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '225000',
        '260000',
        [],
        []
    )
)
//son-moi
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Black Rouge Air Fit Velvet Tint',
        '../images/hocImage/sonmoi/sonmoi1/son_kem_black_rouge_air_fit_velvet_tint_7d9a8eeac20046bcae29a92b2fb9a436_large.png',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Black Rouge Air Fit Velvet Tint',
        '../images/hocImage/sonmoi/sonmoi1/son_kem_black_rouge_air_fit_velvet_tint_7d9a8eeac20046bcae29a92b2fb9a436_large.png',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Black Rouge Half N Half Collection',
        '../images/hocImage/sonmoi/sonmoi1/son_kem_black_rouge_half_n_half_collection_71703493aafb4e76b32a6ba8c8523d53_large.png',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '125000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        '[HOT- CÓ SẴN] Son Kem Lì Merzy The Heritage Velvet Tint',
        '../images/hocImage/sonmoi/sonmoi1/son_kem_li_merzy_the_heritage_velvet_tint_fa1257665ee441e98f296390c650bd3b_large.png',
        'Merzy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '165000',
        '249000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Bbia Last Velvet Lip Tint Ver 1 - Ver 5',
        '../images/hocImage/sonmoi/sonmoi1/kem-bbia_96a9520ef53e4fa7bb58fe27aa1429a0_large.png',
        'Bbia',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '240000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Romand Milk Tea Velvet Tint',
        '../images/hocImage/sonmoi/sonmoi1/milktea_romand1_8f7ac1af6a88469ba0c084558bc08ecb_large.jpg',
        'Romand',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi Romand Zero Matte',
        '../images/hocImage/sonmoi/sonmoi1/roman11_a09df779d43643779ab0bb8c516da4e0_large.jpg',
        'Romand',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '155000',
        '450000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        '[LIMITED] Son Kem Lì Peripera Ink Velvet 2021',
        '../images/hocImage/sonmoi/sonmoi1/03_9c0679dfa61046efbec866a7ae6308da_large.png',
        'Peripera',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '179000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Merzy The First Velvet Tint Season 3 (Vỏ Đỏ)',
        '../images/hocImage/sonmoi/sonmoi1/son_kem_merzy_mellow_tint__vo_do__dc827a6f6586445ebe8d23d211d21a4c_large.png',
        'Merzy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '159000',
        '220000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Romand See Through Matte Tint (Hanbok)',
        '../images/hocImage/sonmoi/sonmoi1/roman__690f1213448a44a1b2a0758850b1e796_large.jpg',
        'Romand',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '159000',
        '190000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem 3CE Cloud Lip Tint',
        '../images/hocImage/sonmoi/sonmoi1/son_3ce_cloud_lip_tint_6a8af9f7f95a4d73bc5cefc07873ba79_large.png',
        '3CE',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '350000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Tint Lì Romand Juicy Lasting Tint',
        '../images/hocImage/sonmoi/sonmoi1/roman-juicy-4_94adfe9f88ae4967baccc47027c17355_large.jpg',
        'Romand',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Merzy Another Me Bite The Beat Mellow Tint (Vỏ City tím)',
        '../images/hocImage/sonmoi/sonmoi2/merzy-votim.jpg_02bfbc2275e441d4812e52e6bcb3db82_large.png',
        'Merzy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Romand Zero Velvet Tint',
        '../images/hocImage/sonmoi/sonmoi2/203_1_271a13909a5b4cef854ed8192351de76_large.png',
        'Romand',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '260000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son dưỡng Byphasse Baume SPF30',
        '../images/hocImage/sonmoi/sonmoi2/71_1_0ef11006cc74430ba957a387be370225_large.png',
        'Byphasse',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '45000',
        '55000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem G9Skin First V-Fit Velvet Tint',
        '../images/hocImage/sonmoi/sonmoi2/g9skin-firrst_27455a55b97c4c50957592ab8522a623_large.jpg',
        'G9Skin',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '138000',
        '149000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi G9 Skin First V-Fit Lipstick',
        '../images/hocImage/sonmoi/sonmoi2/0af906f4a2f57b826e24304ba589487d_dd0d39b9aa504189b8d45b36f55798c7_large.jpeg',
        'G9 Skin',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '135000',
        '160000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì 3CE Velvet Lip Tint',
        '../images/hocImage/sonmoi/sonmoi2/son_3ce_velvet_a3cd5373fe834168a7f8f023d699f178_large.png',
        '3CE',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '319000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Thỏi 3CE Matte Lip Color',
        '../images/hocImage/sonmoi/sonmoi2/3ce-vo-vang-4_9fd94a56e02f47edb192d83a7303970c_large.jpg',
        '3CE',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '269000',
        '450000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Tint Merzy Aurora Dewy Tint',
        '../images/hocImage/sonmoi/sonmoi2/son_merzy_aurora_dewy_eebb55fb819840a79b58499624537878_large.png',
        'Merzy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '109000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Romand Glasting Water Tint (Hanbok)',
        '../images/hocImage/sonmoi/sonmoi2/e8342e09bbb846172ef10fcda3d1578b_bc9a2d77d63d4dfbb1264d6f0989e118_large.jpg',
        'Romand',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '195000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem 3CE Flash Lip Tint',
        '../images/hocImage/sonmoi/sonmoi2/3ce-flash_f9df632bd9874dce84c2a57648c42368_large.jpeg',
        '3CE ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '350000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Siêu Lì, Mịn Môi Black Rouge Cream Matt Rouge',
        '../images/hocImage/sonmoi/sonmoi2/black-rouge-crem-matt_913ced08cf974ff99bcb4c2b4ef16284_large.jpg',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '89000',
        '170000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son dưỡng đa năng I\'m Meme Pep!Balm',
        '../images/hocImage/sonmoi/sonmoi2/meme_93a0a87744b74afda760e0441550d4f3_large.jpg',
        ' I\'m Meme',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '110000',
        '170000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Romand Glasting Water Tint',
        '../images/hocImage/sonmoi/sonmoi3/romand-glasting-7_f62ac7451bc449e8a568e4c98aee4071_large.jpg',
        'Romand',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Lemonade Perfect Couple Lip Fashionista',
        '../images/hocImage/sonmoi/sonmoi3/son-kem-lemonade-perfect-couple-lip-fashionista_23c79b80ad56405c8e1fb688a62a9736_large.jpg',
        'Lemonade',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '229000',
        '299000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem 3CE Blurring Liquid Lip',
        '../images/hocImage/sonmoi/sonmoi3/3ce-blurrring-10.jpg_b51b525771154d3a8921c6a1500c222e_large.png',
        '3CE',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '350000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Merzy Another Me Bite The Beat Mellow Tint (limited she is',
        '../images/hocImage/sonmoi/sonmoi3/merzy-mellow-tint-4_c3ef204a316d4aaeb48c245c15de834b_large.jpg',
        'Merzy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Colourpop Lippie Stix',
        '../images/hocImage/sonmoi/sonmoi3/son-colourpop-lippie-stix__1__a92244095586469383e2d0ff8bbd35cd_large.jpg',
        'Colourpop',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '169000',
        '209000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Môi Thỏi Mac Matte Lipstick Rouge',
        '../images/hocImage/sonmoi/sonmoi3/589_bb71485c8e0e40309713f8a25b25c6c7_large.png',
        'MAC',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '390000',
        '495000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi YSL Rouge Pur Couture (Limited Edition)',
        '../images/hocImage/sonmoi/sonmoi3/7c244af452faa1a4f8eb_d1c84bf5d2524f29be98e78d67de6795_large.jpg',
        ' Yve Saint Laurent',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '580000',
        '750000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì 3CE Soft Lip Lacquer',
        '../images/hocImage/sonmoi/sonmoi3/3ce-soft-3_7f76315af31c47a88930f44751e44271_large.jpg',
        '3CE',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '219000',
        '350000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi Colourpop Lux Lipstick',
        '../images/hocImage/sonmoi/sonmoi3/son-thoi-colourpop-lux-lipstick__1__79b9844236a04f1cae5e4007d85c64a5_large.jpg',
        'Colourpop',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '265000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Colourpop Lux Velvet Liquid Lipstick',
        '../images/hocImage/sonmoi/sonmoi3/48_1_80c55f5b30a34fbcbfb71428d9ff97b5_large.png',
        'Colourpop',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '265000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Gió Mỹ MOODmatcher Fran Wilson',
        '../images/hocImage/sonmoi/sonmoi3/78_1_746f6ba9155740dcb9b33d99d41e3a82_large.png',
        'Moodmatcher',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '62000',
        '98000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Merzy Another Me Bite The Beat Mellow Tint (vỏ đen dỏ)',
        '../images/hocImage/sonmoi/sonmoi3/son_kem_merzy_mellow_tint__vo_den_do__7b29c65966764ce0a53d70c9c51d74f4_large.png',
        'Merzy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '179000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Môi Clio Melting Matte Lips',
        '../images/hocImage/sonmoi/sonmoi4/234_1_529c314b70ab457a969c740e26a36713_large.png',
        'Clio',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '109000',
        '199000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Unleashia Non-Sticky Dazzle Tint',
        '../images/hocImage/sonmoi/sonmoi4/unleashia-1_76179a1280b0473da7e51e7c43a84256_large.jpg',
        'Unleashia',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '250000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Loreal Rouge Signature',
        '../images/hocImage/sonmoi/sonmoi4/loreal_cf53d9d908ac4a49946e5e81c47da963_large.png',
        'L\'Oreal Paris',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '249000',
        '270000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Thỏi BBia Last Powder Lipstick',
        '../images/hocImage/sonmoi/sonmoi4/bbia-power_e1820d680751486b919d91b36d1a5228_large.jpg',
        'Bbia',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '169000',
        '190000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Gilaa Long Wear Lip Cream',
        '../images/hocImage/sonmoi/sonmoi4/9634718de5aac7bda13cc8f5a30eb11a_c5d1ba971ddd4bb580a77209bd9b5aa5_large.jpeg',
        'Gilaa',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '165000',
        '250000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi Nars Lipstick',
        '../images/hocImage/sonmoi/sonmoi4/chung_310d46594a45440280e1f41c04dac137_large.jpg',
        'Nars',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '599000',
        '800000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Shu Uemura Rouge Unlimited Superme Matte',
        '../images/hocImage/sonmoi/sonmoi4/d9a761d37add8983d0cc_3f9f2617c40c43d3bb2d2857d5e0bb06_large.jpg',
        'Shu Uemura',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '599000',
        '800000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son thỏi Clio Mad Mattle Stain Lips',
        '../images/hocImage/sonmoi/sonmoi4/498002e21aece9b2b0fd_e17f97da2a1b4fb48ad5027335cef232_large.jpg',
        'Clio',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '138000',
        '210000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son kem Lemonade Super Natural Matte Lipcream',
        '../images/hocImage/sonmoi/sonmoi4/lemonade-3_b564b30dfc70455caf0b2bcec505193c_large.jpg',
        'Lemonade ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '189000',
        '249000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Dearmay Breeze Velvet Lip Tint',
        '../images/hocImage/sonmoi/sonmoi4/dearmay_63604b2d9fc84663844930ba668a0345_large.jpg',
        'Dearmay',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '145000',
        '170000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Tint Romand Glasting Water Gloss',
        '../images/hocImage/sonmoi/sonmoi4/romand-glasting-water-gloss-6_fd2fcf3224674af0bd93c3285789ebfc_large.jpg',
        'Romand',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '136000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Kem Lì Mịn A. Black Artistic Velvet Tint',
        '../images/hocImage/sonmoi/sonmoi4/son-a-black-3_eef7ec85090b4dba8984aaec7fdb1a49_large.jpg',
        ' A.Black',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '210000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-moi',
        'Son Hansmile Mystic Lipstick (Mua 1 cây, tặng 1 cây)',
        '../images/hocImage/sonmoi/sonmoi5/son-hansmile-17-png_650d0dd75ee24533af23cebe3e27b4f1_large.jpg',
        'Hansmile',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '390000',
        '450000',
        [],
        []
    )
)
//son-duong
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Dưỡng môi Mediheal Labocare Pantenolips',
        '../images/hocImage/sonduong/sonduong1/medi__59a4f03692b849ed8e2ce7a145e8e662_large.jpg',
        'Mediheal',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '65000',
        '110000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng Byphasse Baume SPF30',
        '../images/hocImage/sonduong/sonduong1/71_1_0ef11006cc74430ba957a387be370225_large.png',
        'Byphasse',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '45000',
        '55000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng đa năng I\'m Meme Pep!Balm',
        '../images/hocImage/sonduong/sonduong1/meme_93a0a87744b74afda760e0441550d4f3_large.jpg',
        ' I\'m Meme',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '110000',
        '110000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng Dior Lip Maximizer Collagen Activ (Minisize 2ml)',
        '../images/hocImage/sonduong/sonduong1/dior_29becf6e1597463895e45dc3031121eb_large.jpg',
        'Dior',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '179000',
        '250000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Đổi Màu YNM Rainbow Honey Lip Balm (vàng)',
        '../images/hocImage/sonduong/sonduong1/rainbow__e980ee30abee4963ba24c9b6c05f396e_large.jpg',
        'YNM',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '105000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng Innisfree Glow Tint',
        '../images/hocImage/sonduong/sonduong1/sonduong-innisfree-3.jpg_22deb8ea18be4fa9ae61dac01d2b984c_large.png',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '99000',
        '139000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng Maybelline Baby Lips',
        '../images/hocImage/sonduong/sonduong1/baby-maybe2_b15fb507f8ec46aca0583387cc2ee09c_large.jpg',
        'Maybelline',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '65000',
        '95000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi Bioderma Atoderm Lèvres Stick Hydratantue',
        '../images/hocImage/sonduong/sonduong1/sonduong-bioi.jpg_1205ced280404061a0bbbe84256b3428_large.png',
        'Bioderma',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '45000',
        '80000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi Caudalie Lip Conditioner',
        '../images/hocImage/sonduong/sonduong1/caudalie1_d7f8add6e49348a5a198571bf7777355_large.jpg',
        'Caudalie',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '85000',
        '120000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Môi Có Nhũ Unleashia Glittery Wave Lip Balm',
        '../images/hocImage/sonduong/sonduong1/581_1_0a84595688f140dba400551b2440c35f_large.png',
        'Unleashia ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '210000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi dầu dừa Bến Tre the cocoon 5g',
        '../images/hocImage/sonduong/sonduong1/1_56b1e0bd7c0f4feb9f2db4ad5c2c8953_large.jpg',
        'Cocoon',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '29000',
        '32000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi dừa thiên nhiên Sense Plus Coco Balmie',
        '../images/hocImage/sonduong/sonduong1/son_duong_moi_dua_thien_nhien_sense_plus_coco_balmie__3.5g_0_ccf735c622a94021a0eda1501f9098dd_large.jpg',
        ' Sense Plus',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '75000',
        '89000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Môi Givenchy Le Rouge Perfecto (Mini 1.2g)',
        '../images/hocImage/sonduong/sonduong2/524_1_9dabe5763794426393eff375225a8887_large.png',
        'Givenchy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '238000',
        '250000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi Nuxe Rêve de miel - lip moisturizing stick',
        '../images/hocImage/sonduong/sonduong2/nuxe1_17808f51f7994487befcf900119026ac_large.jpg',
        'Nuxe Rêve de miel',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '88000',
        '130000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son dưỡng môi tinh chất dừa Sense Plus Naked Kiss Balm',
        '../images/hocImage/sonduong/sonduong2/son_duong_moi_tinh_chat_dua_sense_plus_naked_kiss_balm__5g__f0c8d98354ae4154882607a0136d8e37_large.jpg',
        'Sense Plus ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '65000',
        '75000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Môi Vaseline Lip Therapy',
        '../images/hocImage/sonduong/sonduong2/sonduong-vaseline_316b2674e2044a1981234a41d5702320_large.jpeg',
        'Vaseline',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '42000',
        '70000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng Omi Brotherhood Menturm Medicated Stick',
        '../images/hocImage/sonduong/sonduong2/omi3_f9c54807c9b549a8903137504c00840a_large.jpg',
        ' Omi BrotherHood',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '28000',
        '40000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son Dưỡng YNM Honey Lip Balm',
        '../images/hocImage/sonduong/sonduong2/sd-ynm_10b4c0d2db774ed2aa7068e601dafb74_large.jpg',
        'YNM ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '122000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'son-duong',
        'Son lót dưỡng Lemonade Lip Filler',
        '../images/hocImage/sonduong/sonduong2/son-filler-4_63eee52e197741aeb43be9ad475b64e6_large.jpg',
        'Lemonade',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '119000',
        '159000',
        [],
        []
    )
)
//mat-na-moi
array.push(
    new Product(
        'make-up-5',
        'moi',
        'mat-na-moi',
        'Mặt nạ môi dưỡng ẩm Sense Plus Hydrating Lip Mask',
        '../images/hocImage/matnamoi/matnamoi1/matnamoi-sense.jpg_043e85d1c9184233ae090ff6af3c3142_large.png',
        'Sense Plus',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '15000',
        '17000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'mat-na-moi',
        'Mặt nạ ngủ môi Care:nel Lip Sleeping Mask',
        '../images/hocImage/matnamoi/matnamoi1/matnamoi-care2_02a0b7fecdee4078bef709742e22ade3_large.jpg',
        'Care:nel',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '55000',
        '75000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'moi',
        'mat-na-moi',
        'Mặt Nạ Ngủ Môi Laneige Lip Sleeping Mask',
        '../images/hocImage/matnamoi/matnamoi1/mat-na-ngu-moi-laneige-lip-sleeping-mask__1__666372ca11794bfd824c30a8d6625937_large.png',
        'Laneige ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '49000',
        '75000',
        [],
        []
    )
)
//mat
//eyeliner-ke-mat
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Bút Kẻ Mắt Dạng Gel Lilybyred Starry Eyes Am9 To Pm9 Gel Eyeliner',
        '../images/hocImage/kemat/kemat1/00_893161eff9e64231bf0dbcfefb762c43_large.png',
        'Lilybyred',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '169000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Bút Kẻ Mắt Nước Siêu Mảnh Lilybyred am9 to pm9 Survival Pen Liner',
        '../images/hocImage/kemat/kemat1/ke.pen.00_8fa92b57816b44b0b959255b10b8edf8_large.png',
        'Lilybyred',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '159000',
        '189000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Chì vặn kẻ mắt Vacosi Natural Studio Styling Twist Liner',
        '../images/hocImage/kemat/kemat1/chi_ke_mat_6af45643bf9541fdbcf76d60074aa5bf_large.jpg',
        'Vacosi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '79000',
        '120000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Gel kẻ mắt Tonymoly Backstage Gel Eyeliner',
        '../images/hocImage/kemat/kemat1/tony-mat3_4f0ea7e5e0774b50ac1f7208098bba80_large.jpg',
        'Tonymoly',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '109000',
        '135000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt Black Rouge Power Proof Pen Liner',
        '../images/hocImage/kemat/kemat1/ke-ma-t-black-rouge_88793f8859e84d52851d0dc698f2ea0e_large.jpg',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '140000',
        '160000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt Karadium Waterproof Brush Liner',
        '../images/hocImage/kemat/kemat1/kematnuockaradium11nendepxinh_76a58666823b4698a7388b86c5a430a5_large.jpg',
        'Karadium',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '79000',
        '97000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt Merzy Pen Eyeliner',
        '../images/hocImage/kemat/kemat1/ea08ba4e8e977ec92786_41af7a5d0d9d4ba8bc563b37b2385024_large.jpg',
        'Merzy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '89000',
        '160000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt nhũ Black Rouge Pearlvely I Glitter',
        '../images/hocImage/kemat/kemat1/nhu-ma-t-black-rouge-1_0e2a94ffb1154676982eda51d55909af_large.jpg',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '140000',
        '160000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt nhũ Black Rouge Pearlvely I Glitter Universe',
        '../images/hocImage/kemat/kemat1/nhu-ma-t-black-rouge-1_0e2a94ffb1154676982eda51d55909af_large.jpg',
        ' Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '135000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ Mắt Nước Lâu Trôi Lemonade Supernatural Eyeliner Black',
        '../images/hocImage/kemat/kemat1/00_9ec10532707949e790ad45731457affd_large.png',
        'Lemonade',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '199000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt nước Maybelline Hyper Sharp Power (màu đen)',
        '../images/hocImage/kemat/kemat1/knm-maybe_11aa9c22596b4f59afb37bfac3f25d7e_large.jpg',
        'Maybelline',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt nước Merzy The Heritage Pen Eyeliner',
        '../images/hocImage/kemat/kemat1/ke_mat_nuoc_merzy_the_heritage_pen_eyeliner_48c5c5010ebf4ba99b8a042f48df03f1_large.png',
        'Merzy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '125000',
        '135000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ Mắt Nước Vacosi Waterproof Pen Eyeliner 24h',
        '../images/hocImage/kemat/kemat2/161_ba808bc8f11b4d98851d5fedc0cf42da_large.png',
        'Vacosi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '79000',
        '100000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ mắt Powerproof Brush Liner Innisfree',
        '../images/hocImage/kemat/kemat2/innisfree-power_016b29c4735f49ab84e6fad50989875f_large.jpg',
        'Innisfree ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '138000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'eyeliner-ke-mat',
        'Kẻ Mắt Vacosi Natural Studio Waterproof Eyeliner - VM24',
        '../images/hocImage/kemat/kemat2/ke-mat-nuoc-vacosi-m24__1__921734429b8e40de802a47e3ea734657_large.jpg',
        'Vacosi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '85000',
        '115000',
        [],
        []
    )
)
//mascara
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Chì Kẻ Mày Và Mascara Chân Mày The Saem Eco Soul Brow Pencil & Mascara',
        '../images/hocImage/mascara/mascara/135_1_0155e897371a4feab5d5a70216e1583e_large.png',
        'The saem',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '115000',
        '149000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Chuốt Mi Black Rouge Perfect Lash Cara',
        '../images/hocImage/mascara/mascara/mascara-black-rouge-1_e4af543742a3498b880473e288e4688c_large.jpg',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '140000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Chuốt Mi Lemonade SuperNatural Mascara',
        '../images/hocImage/mascara/mascara/dc138b735fa6bb3632d0716659572f9c_a5535b45df2a46d6b2b81ce5b6b83e8b_large.jpg',
        'Lemonade ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '139000',
        '189000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Chuốt mi Missha Mascara The Style 4D (mẫu mới)',
        '../images/hocImage/mascara/mascara/224_1_a43b73276b8e409eaff7088df8801146_large.png',
        'Missha',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '49000',
        '80000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Lông mi giả Vacosi 4D Pro Eyelashes',
        '../images/hocImage/mascara/mascara/backround_sp_87b80f01e95a486fbeb109a05a3677fe_large.jpg',
        'Vacosi ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '53000',
        '80000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Chân Mày Lilybyred Skinny Mes Brow Mascara',
        '../images/hocImage/mascara/mascara/1_a832cd1f149d41d890c4a9d136147bb1_large.png',
        'Lilybyred',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Chuốt mi dày Karadium On the Top Fiber Mascara',
        '../images/hocImage/mascara/mascara/karadium-mascara_e8806484f715400a8454cb80a03ea5ee_large.jpg',
        'Karadium',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '110000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Cong Mi Maybelline Hyper Curl',
        '../images/hocImage/mascara/mascara/mascara-maybelline-the-hyper-curl_8a97de436ad44d6d8a448ef79180a50b_large.jpg',
        'Maybelline',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '139000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara dày mi cực đại Maybelline New York Magnum Bigshot',
        '../images/hocImage/mascara/mascara/',
        'Maybelline',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '170000',
        '175000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Dưỡng Mi Maybelline The Colossal Waterproof Mascara',
        '../images/hocImage/mascara/mascara/575_1_9a772bdf01b746aba0ee1dc94ac31e0d_large.png',
        'Khác',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '168000',
        '168000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara làm dày và dài mi Maybelline Falsies',
        '../images/hocImage/mascara/mascara/z2230369756961-cd8df748e756d9b2501878507aa9656e_664f7302a00542f09ff1e2c86d845760_large.jpg',
        'Maybelline ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '199000',
        '220000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara lông mày Innisfree Skinny Brow',
        '../images/hocImage/mascara/mascara/6a221dab8e1c5b39b188de9f6e788a7d_1f2009098cd24b40ab5d0332ea24acf5_large.jpg',
        'Innisfree ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '98000',
        '175000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'mascara',
        'Mascara Skinny Microcara Zero Innisfree',
        '../images/hocImage/mascara/mascara2/6a221dab8e1c5b39b188de9f6e788a7d_11b8da51e42e4617826a524137bff22f_large.jpg',
        'Innisfree ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '189000',
        [],
        []
    )
)
//ke-may
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Bột Kẻ Chân Mày Innisfree Twotone Eyebrow Kit',
        '../images/hocImage/kemay/kemay1/bo-t-ta-n-ma-y-innisfree-3_f2fdf63a98b34340a7f1b8f63e0e8adb_large.jpg',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '118000',
        '140000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày 2 đầu Lemonade Want It Got It Dual Eyebrow',
        '../images/hocImage/kemay/kemay1/6a74da7933b2c0ec99a3_236fb8e0a532414c860205b7ac950191_large.jpg',
        'Lemonade',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '199000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày 3 đầu Vacosi Dual Eyebrow Shape Pen',
        '../images/hocImage/kemay/kemay1/chi-ke-may-3-dau-vacosi-dual-eyebrow-shape-pen-2_23d362d50aa64a9d817d131238f9fe40_large.jpg',
        'Vacosi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '85000',
        '95000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày Black Rouge Brow Master',
        '../images/hocImage/kemay/kemay1/6_3345fb3c4f274cf193176b6322941d75_large.png',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '115000',
        '158000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày Designing Eyebrow The Face Shop',
        '../images/hocImage/kemay/kemay1/thefaceshopdesignmyeyebrow014_0f4f984a97964c7b9341468c7bcc6f2f_large.jpg',
        'The Face Shop',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '46000',
        '45000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày Innisfree Auto Eyebrow Pencil',
        '../images/hocImage/kemay/kemay1/chi-ke-may-innisfree-auto-eyebrow-pencil__3__8196eaa5f4f241608cf747c8a6fa9bef_large.jpg',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '52000',
        '78000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì kẻ mày nét mảnh Karadium Auto Eyebrow Pencil 0.18gr',
        '../images/hocImage/kemay/kemay1/chung_784221eff3b94b4995f4af803ea71e6e_large.jpg',
        'Karadium',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '45000',
        '70000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì Kẻ Mày Ngang 2 Đầu The Saem Saemmul Artlook Eyebrow',
        '../images/hocImage/kemay/kemay1/288_1_2d3796ac1b6e43e4b19896ed4c8ae341_large.png',
        ' The saem',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '89000',
        '89000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì Kẻ Mày Và Mascara Chân Mày The Saem Eco Soul Brow Pencil & Mascara',
        '../images/hocImage/kemay/kemay1/135_1_0155e897371a4feab5d5a70216e1583e_large.png',
        'The saem',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '115000',
        '149000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Chì xé kẻ mày Cosmetic Art',
        '../images/hocImage/kemay/kemay1/47b108e471ce7729e6ba377cac256968_fce441a48a6540469fa39b32580f522c_large.jpg',
        'Cỏ Cosmetics',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '10000',
        '15000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Dao cạo tỉa lông mày Nalamei',
        '../images/hocImage/kemay/kemay1/dao-nalamei__1__8678d95f54e247bb8fc04ba33c1f6377_large.jpg',
        'Nalamei ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '12000',
        '25000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Dao cạo tỉa lông mày Vacosi Eyebrow Knife',
        '../images/hocImage/kemay/kemay1/dao-cao-tia-long-may-vacosi-eyebrow-knife-dc06-1_e0931b48f2a34451b855870d73d9b3df_large.jpg',
        'Vacosi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '35000',
        '49000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Kẻ Mày Dạng Xăm Vacosi Realbrow Tattoo Pen',
        '../images/hocImage/kemay/kemay2/vacosirealbrowtattoopen_731e5273ce3b4f2d9c8fab172d1e22b2_large.jpg',
        'Vacosi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '79000',
        '79000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Mascara Chân Mày Lilybyred Skinny Mes Brow Mascarae',
        '../images/hocImage/kemay/kemay2/1_a832cd1f149d41d890c4a9d136147bb1_large.png',
        'Lilybyred',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '129000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'ke-may',
        'Mascara lông mày Innisfree Skinny Brow',
        '../images/hocImage/kemay/kemay2/6a221dab8e1c5b39b188de9f6e788a7d_1f2009098cd24b40ab5d0332ea24acf5_large.jpg',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '98000',
        '175000',
        [],
        []
    )
)
//phan-mat
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Bảng Phấn Mắt Clio Prism Air Eye Palette',
        '../images/hocImage/phanmat/phanmat1/clio.jpg_93af29a90bae40b5b0fe8c2b15eaca07_large.png',
        'Clio',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '265000',
        '368000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Bảng phấn mắt COLOURPOP',
        '../images/hocImage/phanmat/phanmat1/baby-got_74d905f0df3f47978fc7cccae427b7a7_large.jpg',
        'CoulorPop ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '325000',
        '560000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Cọ mút tán phấn mắt Vacosi',
        '../images/hocImage/phanmat/phanmat1/cm_375605cc5b4a4305a28b909b4ea74f5d_large.jpg',
        'Vacosi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '4000',
        '5000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn Mắt Black Rouge Crystal Heart Lock Shadow',
        '../images/hocImage/phanmat/phanmat1/pha-n-ma-t-black-rouge-4.-1_4266e8608d6747e986732ef3cf5e6675_large.jpg',
        'Black Rouge',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '175000',
        '180000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn mắt Dikalu 40 ô màu',
        '../images/hocImage/phanmat/phanmat1/dikalu_f584c11033c44132a69f69e3e1cdb148_large.jpg',
        'Dikalu',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '95000',
        '145000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn Mắt Etude House Play Color Eyes',
        '../images/hocImage/phanmat/phanmat1/pha-n-ma-t-etude-cherry-blossom_d2f571e0de384b19a9eed26de31b7466_large.jpg',
        'Etude House',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        'Liên hệ',
        'Liên hệ',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn Mắt Merzy The Heritage Shadow Palette',
        '../images/hocImage/phanmat/phanmat1/phan_mat_merzy_the_heritage_shadow_palette_63420aa30379495d90ddb29f0889481d_large.png',
        'Merzy ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '225000',
        '299000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Phấn Mắt Nhũ 5 Ô Sivanna Colors Peach Pro Eyeshadow HF6031',
        '../images/hocImage/phanmat/phanmat1/484_1_0f59cf44153b43cfa63e545d62ac9509_large.png',
        'Sivanna',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '82000',
        '120000',
        [],
        []
    )
)
array.push(
    new Product(
        'make-up-5',
        'mat',
        'phan-mat',
        'Set Phấn Mắt - Má Hồng - Tạo Khối Sivanna Hello Perfect',
        '../images/hocImage/phanmat/phanmat1/0e638d331799820642649f7833be5c3d_bbfffe2159af4d279909479406744e39_large.jpg',
        'Sivanna ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '95000',
        '150000',
        [],
        []
    )
)
//cham-soc-da
//duong-da
//essence-serum-ampole
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'CC Serum trắng da Senka White Beauty Serum in CC 40gr',
        '../images/hocImage/serum/serum1/12_bddadf7079d94cc880770e21c4f93c86_large.png',
        'Senka',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '179000',
        '205000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Gel chấm mụn Tea Tree Blemish Gel',
        '../images/hocImage/serum/serum1/teatree3_987f65cb45914eb6aa48a3b23f573678_large.jpg',
        'The Body Shop',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '159000',
        '185000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Huyết thanh Dưỡng da MediskinbyC GLUTATHIONE C+ Ampoule 2X',
        '../images/hocImage/serum/serum1/huyethanhdd_-mediskinbyc-1_222c6ef2779348b487f87f65b759a7bf_large.jpg',
        'MediskinbyC',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '340000',
        '550000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Huyết thanh dưỡng trắng chống lão hóa Mediskinbyc Idebenone C +Ampoule 2X',
        '../images/hocImage/serum/serum1/huyetthanhchonglaohoa-mediakibyc_e99722ac00764503979f66b6d5d592be_large.jpg',
        'MediskinbyC',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '340000',
        '618000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Huyết Thanh Trắng Da Angel’s Liquid Glutathion 7Day Whitening Program 700V Ampoule',
        '../images/hocImage/serum/serum1/huyetthanh-angel-7day-4_0913475e67814991ba4a88fc3640d3c4_large.jpg',
        'Angel\'s Liquid ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '419000',
        '500000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Huyết Thanh Trị Nám Trắng Da Angel\'s Liquid Glutathione + Niacinamide 700 V-ampoule',
        '../images/hocImage/serum/serum1/huyetthanh-angel-7day-niacin-3_e81977f8f54448be97fec6648f5b42e5_large.jpg',
        'Angel\'s Liquid',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '439000',
        '500000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem giảm mụn, chống lão hóa A313 Pommade',
        '../images/hocImage/serum/serum1/kemgiammuna313_d04c870744c64de69c6369846f428885_large.jpg',
        'Pharma Developpement',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '220000',
        '380000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem ngăn ngừa mụn và mờ thâm Jonzac Pure Anti - Imperfection',
        '../images/hocImage/serum/serum1/jonzac1_8b7049967ed14288afa124109c8b0cc5_large.jpg',
        'Eau Thermale',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '588000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem trị mụn đỏ Ciracle Red Spot Cream',
        '../images/hocImage/serum/serum1/c.redmun_c1d5c044de8f420f8ac90b46179ba2ca_large.jpg',
        'Ciracle ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '195000',
        '250000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem Trị Mụn Phục Hồi Da Medi-Peel Centella Mezzo Cream',
        '../images/hocImage/serum/serum1/399_1_aa5a518cf3bd4479bbdbab83930c0e09_large.png',
        'Medi-Peel',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '215000',
        '275000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem trị mụn SVR Sebiaclear Active',
        '../images/hocImage/serum/serum1/kem_tri_mun_svr_sebiaclear_active_f181b2ca8a724336abd1fda7514b35b8_large.png',
        'SVR',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '399000',
        '450000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Kem trị sẹo Gentacin Nhật Bản',
        '../images/hocImage/serum/serum1/gentacin-1_f25e8cc68afe4b37aedcd74a2644b123_large.jpg',
        'Gentacin',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '55000',
        '70000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Peel da không bong tróc Red Peel Tingle Serum',
        '../images/hocImage/serum/serum2/peel_da__red_peel_tingle_serum_723664823c754fd8a749554f322bf308_large.png',
        'So Natural',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '310000',
        '600000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Peel da không bong tróc Red Peel Tingle Serum (gói sample 2.5ml)',
        '../images/hocImage/serum/serum2/sr-red_45fe100f84254438b9ce60d38d9ade38_large.jpg',
        'So Natural',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '30000',
        '40000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Sample tinh chất The Green Tea Seed Serum Innisfree',
        '../images/hocImage/serum/serum2/sample_tinh_chat_the_green_tea_seed_serum_innisfree_bbf51e70b0f341c1a0922b60f3f828b6_large (1).png',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '6000',
        '8000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Sample Trị mụn Bija Cica Balm EX Innisfree (tuýp 7ml)',
        '../images/hocImage/serum/serum2/bija3_fe668fd01f96432cbdf97d994559da20_large.jpg',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '32000',
        '60000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum cấp ẩm, phục hồi da The Ordinary Hyaluronic Acid 2% + B5',
        '../images/hocImage/serum/serum2/tinhchat-b5_bdf7f62f676d4406829c7e23dadbb6ed_large.jpg',
        'The Ordinary',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '209000',
        '300000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng da D Program Thermo Defense 40ml',
        '../images/hocImage/serum/serum2/serumd.jpg1_b255a9f9e02c4a5b8e7cfeeddfff5925_large.jpg',
        'd program',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '529000',
        '690000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng da dành cho nam MdoC Sebum Strike Serum',
        '../images/hocImage/serum/serum2/srdd_e10b8049bf5842e09fb2a297ae93d7f1_large.jpg',
        'MdoC',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '499000',
        '669000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum Dưỡng Da Mắt The Ordinary Caffeine Solution 5% + EGCG',
        '../images/hocImage/serum/serum2/caffeine_3f01828f962142f39ad05f6d8f89d27d_large.jpg',
        'The Ordinary ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '209000',
        '280000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng da Vichy Mineral 89 (Tặng kèm Serum Mineral 89 10ml)',
        '../images/hocImage/serum/serum2/sr-dd2_d54aef54c3f74ff493ed2a8c1d1cd0ff_large.jpg',
        'Vichy ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '799000',
        '1010000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng da Vitamin C Melano CC',
        '../images/hocImage/serum/serum2/vitaminc_fcab8070f5904540b6a3189698f48bc8_large.jpg',
        'Rohto',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '239000',
        '320000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng tái tạo da Collagen Luxury Gold 3W Clinic',
        '../images/hocImage/serum/serum2/serum-3w-clinic_d629c3b56715498d81e511f059de2a61_large.jpg',
        ' 3W Clinic',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '135000',
        '200000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng trắng da Senka White Beauty 35g',
        '../images/hocImage/serum/serum2/14_3a8a4a97b0ce4d2da3a281b9d36e4a40_large.png',
        'Senka',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '229000',
        '360000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum dưỡng trắng da Skin1004 Madagascar Centella Hyalu-cica Blue 50ml',
        '../images/hocImage/serum/serum3/chung_57b9e1e77cc44b498193e903a559a69a_large.jpg',
        'Skin1004 ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '329000',
        '490000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum Lựu Innisfree Jeju Pomegranate 50ml',
        '../images/hocImage/serum/serum3/208_1_d9f3a2be99d8447b9719222db67cffc3_large.png',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '410000',
        '509000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum phục hồi tóc Cocoon Sa-chi 70ml',
        '../images/hocImage/serum/serum3/32_f1a22328950b4d3b8b3c31539ea9ce17_large.png',
        'Cocoon',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '112000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum sáng da trị thâm The Ordinary Lactic Acid 10% + HA',
        '../images/hocImage/serum/serum3/lactic-acid_c7721efe4b6a4f0a9cdd5b32fe20805c_large.jpg',
        'The Ordinary',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '209000',
        '260000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Serum sáng da trị thâm The Ordinary Lactic Acid 5% + HA',
        '../images/hocImage/serum/serum3/latic-5_b8194b513498470a86c457ff29f78808_large.jpg',
        'The Ordinary',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '209000',
        '260000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Siêu huyết thanh xóa mụn Derladie Herbal Ampoule for Blemish',
        '../images/hocImage/serum/serum3/huyet-thanh-derladie-tri-mun_e60a2f760beb4086932387d2d909e131_large.jpg',
        'Derladie',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '399000',
        '630000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'The Ordinary Niacinamide 10% + Zinc 1%',
        '../images/hocImage/serum/serum3/buffetserum_f9f2a974634e45de8db283a45de830b8_large.jpg',
        'The Ordinary',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '185000',
        '250000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh chất 9 Wishes Ampule Serum 25ml',
        '../images/hocImage/serum/serum3/tinh_chat_9_wishes_ampule_serum_25ml_4c289b48569741aa958d0b5a30c38a38_large.png',
        '9 WISHES',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '175000',
        '290000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh Chất Balance Active Formula Snake Venom Wrinkle-Freeze Serum 30ml',
        '../images/hocImage/serum/serum3/t_noc_ran_balance_active_formula_snake_venom_wrinkle-freeze_serum_30ml_2e286323b0c84d2b8d71df17bef5eb96_large.png',
        'Balance Active Formula',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '139000',
        '220000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh chất Balance Hyaluronic Deep Moisture Serum Intense Hydration',
        '../images/hocImage/serum/serum3/tc-balance_48d0745a4cd640ac9ca8bd68823fc4ac_large.jpg',
        'Balance',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '139000',
        '290000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh chất bí đao The Cocoon Winter Melon Serum 70ml',
        '../images/hocImage/serum/serum3/tinh_chat_bi_dao_a7fbe1cd04bd4ad485aaee2774014142_large.jpg',
        'Cocoon ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '239000',
        '2390000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Tinh chất chống lão hoá The Ordinary Buffet Multi-Technology Peptide Serum',
        '../images/hocImage/serum/serum3/202_1_dff86de2c2ee4a5989647ae5ba0ae50f_large.png',
        'The Ordinary',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '415000',
        '550000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Viên Uống Trắng Da Angel’s Liquid Glutathione',
        '../images/hocImage/serum/serum7/vienuongtrangda_c448872abfcf4cd88b01dec26c889eb6_large.jpg',
        'Angel\'s Liquid',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '318000',
        '400000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'essence-serum-ampole',
        'Xịt giảm mụn lưng Angel\'s Liquid Body Mist',
        '../images/hocImage/serum/serum7/xit-mun-lung-angel_808d7c3d45c04652bf847e4f05a57eb7_large.jpg',
        'Angel\'s Liquid',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '409000',
        '725000',
        [],
        []
    )
)
//duong-vung-mat
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Dưỡng mắt Gold Collagen Rejuvenating Eye Serum Balance',
        '../images/hocImage/duongmat/duongmat1/gold_collagen_4f9ef2582bee496d948a85903c34d5f9_large.jpg',
        'Balance Active Formula',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '119000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Gel dưỡng mắt Klairs Fundamental Eye Awakening Gel 35gr',
        '../images/hocImage/duongmat/duongmat1/geldm_klairs_34182c7745a64af59cae13b7da6cc601_large.jpg',
        'Klairs',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '235000',
        '520000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem dưỡng mắt AHC Youth Lasting Real Eye Cream (xanh)',
        '../images/hocImage/duongmat/duongmat1/478_1_388e9ba0bda74a8fbe5d117495f0fb09_large.png',
        'AHC',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '69000',
        '69000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem dưỡng mắt Balance Active Formula Snake Venom Eye Cream',
        '../images/hocImage/duongmat/duongmat1/balance-1_f78744432acc47489099dc7d7675069d_large.jpg',
        'Balance Active Formula',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '98000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem dưỡng mắt Dragon\'s Blood Eye Lift Balm Balance',
        '../images/hocImage/duongmat/duongmat1/blance_dragons_66c88e50067447458f9ec7ad7e72d405_large.jpg',
        'Balance Active Formula',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '119000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem dưỡng mắt Klairs Fundamental Nourishing Eye Butter 20gr',
        '../images/hocImage/duongmat/duongmat1/klairs_fundamen_40b7925df9974d20b2c6794ad9bbd553_large.jpg',
        'Klairs ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '309000',
        '510000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem Dưỡng Mắt Kumargic Giảm Quầng Thâm & Bọng Mắt',
        '../images/hocImage/duongmat/duongmat1/89_1_0427fc13121a44d6b0ecf91d5e5a954e_large.png',
        'Kumargic',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '149000',
        '208000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem Dưỡng Mắt Meishoku PlaceWhiter Medicated Whitening Eye Cream',
        '../images/hocImage/duongmat/duongmat1/meishoku_13343afdfb1f45d09a61f29e5f892c92_large.jpg',
        'Meishoku',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '192000',
        '250000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem mắt AHC Ageless Real Eye Cream',
        '../images/hocImage/duongmat/duongmat1/kemmat-ahc_f78a7e619a364d908d7328a8adc60656_large.png',
        'AHC',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '60000',
        '120000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Kem mắt Sur.Medic Perfection 100™ All In One Facial Eye Cream',
        '../images/hocImage/duongmat/duongmat1/kemmat-sur_eaa43de533a44053adda13e1c3c3d970_large.png',
        ' Sur.Medic',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '359000',
        '460000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'duong-vung-mat',
        'Thanh Lăn Dưỡng Mắt và Da Mặt Innisfree Green Tea Seed Eye & Face Ball',
        '../images/hocImage/duongmat/duongmat1/green_tea_seed_4a4a7ef96e9f4f5f807d6a7d815769dd_large.jpg',
        'Innisfree ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '269000',
        '400000',
        [],
        []
    )
)
//bo-duong-da
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Dưỡng Ẩm Innisfree Jeju Cherry Blossom Special Kit (mini)',
        '../images/hocImage/bo-dd/bdd1/5_66eb46eee5e54701b6cd283977b7657b_large.png',
        'Innisfree',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '115000',
        '150000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Dưỡng Da cho da khô D Program Moist Care Set (Lotion 23ml + Emulsion 11ml)',
        '../images/hocImage/bo-dd/bdd1/chung_e99a1b06923d48f09b539a1d1686a000_large.jpg',
        'D Program',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '199000',
        '245000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ dưỡng da Some By Mi AHA BHA PHA 30 Days Miracle Solution 4 Step Kit Edition (4 Items)',
        '../images/hocImage/bo-dd/bdd1/kit.00_ef3930550ea84b99aba2d8452c60f75e_large.jpg',
        'Some By Mi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '269000',
        '399000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ dưỡng trắng da 7 ngày Angel\'s Liquid Whitening Program Glutathione',
        '../images/hocImage/bo-dd/bdd1/setmini-dd_ac09bdead62c4269b7ee996ce5f19378_large.jpg',
        ' Angel\'s Liquid ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '349000',
        '600000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ dưỡng trắng Some By Mi Yuja Niacin 30 Days Brightening Starter Kit',
        '../images/hocImage/bo-dd/bdd1/bdt-somebymi_39de4eebd2e54227882b862b80ae6aea_large.jpg',
        'Some By Mi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '285000',
        '400000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Dưỡng Trị Mụn Some By Mi AHA-BHA-PHA 30 Days Miracle Travel Kit',
        '../images/hocImage/bo-dd/bdd1/bdtm-somebymi1_1a7bcc4d380f4a56863a250bd7201e84_large.jpg',
        'Some By Mi',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '259000',
        '349000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ giảm mụn, thâm mụn & thu nhỏ lỗ chân lông La Roche-Posay',
        '../images/hocImage/bo-dd/bdd1/bgm-roche_a74c87fea08b49cd8740ca65d6f10985_large.jpg',
        'La Roche-Posay',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '699000',
        '920000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Kit Cocoon Bí Đao Chăm Sóc Da Mụn',
        '../images/hocImage/bo-dd/bdd1/499_1_6e1f4f47fad74cd6a234a18bc862f295_large.png',
        'Cocoon',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '130000',
        '199000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Kit dưỡng trắng Tiam My Signature Red C',
        '../images/hocImage/bo-dd/bdd1/bkdt_a1037e50eb5e49bfa265414c97f6bdb9_large.jpg',
        'Tiam ',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '309000',
        '350000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ làm sạch sâu, giảm bã nhờn và nuôi dưỡng da Vichy',
        '../images/hocImage/bo-dd/bdd1/z2273329020940-d2ba3956ff1e5d4a0b3a64c0a2e31167_58a5b76219a34b1caccc08302026e06d_large.jpg',
        'Vichy',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '319000',
        '405000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Sản Phẩm Chăm Sóc Cho Da Mụn D Program Acne Set',
        '../images/hocImage/bo-dd/bdd1/1_ac7531d8e47947e0838f173ef45b62c8_large.jpg',
        'D Program',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '199000',
        '245000',
        [],
        []
    )
)
array.push(
    new Product(
        'cham-soc-da',
        'duong-da',
        'bo-duong-da',
        'Bộ Vitamin Duo Trial Kit Klairs',
        '../images/hocImage/bo-dd/BdngdaTrang2/vitamin_a009caa8b5994472bd08ce3d4f5f139a_large.jpg',
        'Klairs',
        'Còn hàng',
        ['vỏ xanh tone 10', 'vỏ xanh tone 20'],
        '299000',
        '480000',
        [],
        []
    )
)

localStorage.setItem("products",JSON.stringify(array))

