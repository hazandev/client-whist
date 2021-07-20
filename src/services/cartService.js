import { httpService } from "./generalService/httpService";

export const cartService = {
    query,
    payCart
}


function query() {
    return httpService.get('product/carts')
}

function payCart(payCart) {
    return httpService.post(`product/pay`, payCart)
}