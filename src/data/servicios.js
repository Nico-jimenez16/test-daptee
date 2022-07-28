import axios from 'axios'

const ProductsApi = 'https://dummyjson.com/products'
const UsersApi = 'https://dummyjson.com/users'



export default{

    async GetProducts(){
        try {
            let respuesta = await axios.get(ProductsApi)
            let productos = await respuesta.data
            return productos

        } catch (error) {
            console.error(error)
        }
    },

    async GetUser(){
        try {
            let respuesta = await axios.get(UsersApi)
            let productos = await respuesta.data
            return productos

        } catch (error) {
            console.error(error)
        }
    },

}