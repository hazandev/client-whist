export const stateService = {
    calcState
}

function calcState(carts) {
    const stateApp = [];
    let products = [];
    const salePerDays = _getDays();
    const timestamps = Object.keys(salePerDays);
    const topUniqeSold = {};
    // get 5 last days
    //get all product
    carts.forEach(cart => {
        products = [...products, ...cart.productsCart];
        //display sale per five last day
        let dateCart = new Date(cart.date).setHours(0, 0, 0, 0)
        const indexDate = timestamps.findIndex(date => date == dateCart)
        if (indexDate !== -1) {
            salePerDays[dateCart] += cart.totalPrice;
        }

        //get uniqe product sale
        cart.uniqeProduct.forEach(productTitle => {
            if (topUniqeSold.hasOwnProperty(productTitle)) {
                topUniqeSold[`${productTitle}`] += 1
            } else {
                topUniqeSold[`${productTitle}`] = 1
            }
        })

    });
    const topSold = _getTopSold(products);
    stateApp.push(topSold)
    stateApp.push(topUniqeSold)
    const salesDaysArr = _convertTimestampToString(salePerDays);
    stateApp.push(salesDaysArr)
    return stateApp;
}

function _getTopSold(products) {
    const sumProducts = {};
    products.forEach(product => {
        if (!sumProducts[product.title]) sumProducts[`${product.title}`] = 0;
        sumProducts[`${product.title}`]++;
    })
    const topFiveSold = _calcTopSold(sumProducts);
    return topFiveSold;
}


function _calcTopSold(sumProducts) {
    const topSold = [];
    const keysSumProducts = Object.keys(sumProducts);
    const valueSumProducts = Object.values(sumProducts);
    for (let i = 0; i < 5; i++) {
        let maxIndex = valueSumProducts.findIndex(value => value === (Math.max(...valueSumProducts)))
        let keyMax = keysSumProducts.splice(maxIndex, 1).pop();
        let valueMax = valueSumProducts.splice(maxIndex, 1).pop();
        topSold.push([keyMax, valueMax]);
    }
    return topSold
}



function _getDays() {
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const salesPerDay = [
        today.setDate(today.getDate()),
        today.setDate(today.getDate() - 1),
        today.setDate(today.getDate() - 1),
        today.setDate(today.getDate() - 1),
        today.setDate(today.getDate() - 1)
    ];
    const res = salesPerDay.reduce((acc, curr) => (acc[curr] = 0, acc), {});
    return res
}

function _convertTimestampToString(saleDate) {

    return Object.keys(saleDate).map(timestamp => {
        const dateObj = new Date(+timestamp);
        const month = dateObj.getMonth()+1;
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        const output =  day+'.'+ month + '.' + year;
        return [output, saleDate[timestamp]]
    });
}