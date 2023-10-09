
const getProduct = async (productId:number) => {
    const result = await fetch(`/api/products/${productId}`)
    
    return result
}

export default getProduct