const express = require('express');
const ProductManager = require('./productManager');  

const app = express();
const PORT = 8080;

const productManager = new ProductManager();

app.get('/products', async (req, res) => {
    try {
        const limit = req.query.limit || undefined;
        const products = await productManager.getProducts();

        if (limit) {
            res.json(products.slice(0, limit));
        } else {
            res.json(products);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

app.get('/products/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);
        const product = await productManager.getProductById(productId);

        if (product) {
            res.json(product);  
        } else {
            res.status(404).json({ error: `No se encontró ningún producto con el ID ${productId}` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
});

app.listen(8080, () => {
    console.log(`Server run on port`, PORT);
});
