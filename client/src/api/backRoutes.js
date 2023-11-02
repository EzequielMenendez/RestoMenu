import axios from "axios"

export const registerRequest = (user) => {
    return axios.post(`/auth/register`, user)
}

export const loginRequest = (user) => {
    return axios.post(`/auth/login`, user)
}

export const getProductRequest = (categoryId) => {
    return axios.get(`/product?categoryId=${categoryId}`)
}

export const getProductByIdRequest = (productId) => {
    return axios.get(`/product/${productId}`)
}

export const postProductRequest = (product) =>{
    return axios.post(`/product`, product)
}

export const postCategoryRequest = (category) =>{
    return axios.post(`/product/category`, category)
}

export const putProductRequest = (product, productId) => {
    return axios.put(`/product/${productId}`, product)
}

export const putCategoryRequest = (category, categoryId) => {
    return axios.put(`/product/category/${categoryId}`, category)
}

export const deleteProductRequest = (productId) => {
    return axios.delete(`/product/${productId}`)
}

export const deleteCategoryRequest = (categoryId) => {
    return axios.delete(`/product/category/${categoryId}`)
}

export const getRestaurantsRequest = () => {
    return axios.get(`/user/restaurant`)
}

export const getRestaurantsbyNameRequest = (name) => {
    return axios.get(`/user/restaurant?name=${name}`)
}

export const getRestaurantByIdRequest = (restaurantId) => {
    return axios.get(`/user/restaurant/${restaurantId}`)
}