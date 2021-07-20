import { httpService } from "./generalService/httpService";


export const productService = {
    query,
    getById,
    save,
    remove,
    getEmptyProduct,
}

function query() {
    return httpService.get('product')
}

function remove(productId) {
    return httpService.delete(`product/${productId}`)
}

function getById(productId) {
    return httpService.get(`product/${productId}`)
}

async function save(product) {    
    if (product._id) {
        const res = await httpService.put(`product/${product._id}`, product)
        return res
    } else {
        const res = await httpService.post(`product`, product)
        return res
    }
}



function getEmptyProduct() {
    return {
        title: '',
        price: '',
        description: '',
        img: ''
    }
}