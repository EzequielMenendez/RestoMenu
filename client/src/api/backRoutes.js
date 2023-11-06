import instance from "./axios"

export const registerRequest = (user) => {
    return instance.post(`/auth/register`, user)
}

export const loginRequest = (user) => {
    return instance.post(`/auth/login`, user)
}

export const getProductRequest = (categoryId) => {
    return instance.get(`/product?categoryId=${categoryId}`)
}

export const getProductByIdRequest = (productId) => {
    return instance.get(`/product/${productId}`)
}

export const postProductRequest = (product) =>{
    return instance.post(`/product`, product)
}

export const postCategoryRequest = (category) =>{
    return instance.post(`/product/category`, category)
}

export const putProductRequest = (product, productId) => {
    return instance.put(`/product/${productId}`, product)
}

export const putCategoryRequest = (category, categoryId) => {
    return instance.put(`/product/category/${categoryId}`, category)
}

export const deleteProductRequest = (productId) => {
    return instance.delete(`/product/${productId}`)
}

export const deleteCategoryRequest = (categoryId) => {
    return instance.delete(`/product/category/${categoryId}`)
}

export const getRestaurantsRequest = () => {
    return instance.get(`/user/restaurant`)
}

export const getRestaurantsbyNameRequest = (name) => {
    return instance.get(`/user/restaurant?name=${name}`)
}

export const getRestaurantByIdRequest = (restaurantId) => {
    return instance.get(`/user/restaurant/${restaurantId}`)
}

export const putRestaurantRequest = (restaurantId, restaurantInfo)=>{
    return instance.put(`/user/restaurant/${restaurantId}`, restaurantInfo)
}