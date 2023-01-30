const dataBestSeller = [
    {
        id: 1,
        name: "Necklace",
        price: "$ 2,350",
        promotionProce: "1,432",
        imgUrl:"image/bestSeller/Rectangle 44.png",
        status: "bestseller",
        sale: "sale"
    },
    {
        id: 2,
        name: "Necklace",
        price: "$ 2,350",
        promotionProce: "2,445",
        imgUrl:"image/bestSeller/Rectangle 46.png",
        status: "bestseller",
    },
    {
        id: 3,
        name: "Earrings",
        price: "$ 2,350",
        promotionProce: "457",
        imgUrl:"image/bestSeller/Rectangle 48.png",
        status: "bestseller",
    },
    {
        id: 4,
        name: "Ring",
        price: "$ 2,350",
        promotionProce: "489"
    }
]

function onPageLoading() {
    loadBestSellerProduct()
};

function loadBestSellerProduct() {
    var vdataProduct = "";
    for (var bI = 0; bI < dataBestSeller.length; bI++) {
        vdataProduct = vdataProduct + `
        <div class="div-card">
            <div>
            
            </div>
        </div>`
    }
    $("#best-seller-card").html(vdataProduct);
};
