export const ProductsArray = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
    }
]

export const getProductData = (id) => {
    let productData = ProductsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data not found!")
        return undefined;
    }

    return productData;
}