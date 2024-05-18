

const getProduct = async() => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/1')
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
    }
}

export default getProduct