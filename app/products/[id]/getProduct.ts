
const getProduct = async (productId:number) => {
    const result = await fetch(`/api/products/${productId}`, {
        method: "GET",
    })

    const product = await result.json()
    return product
}

export default getProduct