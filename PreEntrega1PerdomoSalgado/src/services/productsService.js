import axios from 'axios';


export async function getProducts(limit = 8) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
} 

export async function getProductById(id = 1) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
} 

export async function getCategories() {
    return await axios.get('https://dummyjson.com/products/categories')
} 

export async function getProductsByCategory(categoryId = 'laptops', limit = 8) {
    try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categoryId}?limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
}
