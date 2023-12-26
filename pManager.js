const fs = require('fs');
const path = './products.json';


class ProductManager {
    constructor() {
        this.path = path;
        this.id = 1;
        this.loadProducts();
    }

    async loadProducts() {
        try {
            const data = await fs.readFile(`./products.json`, 'utf-8');
            this.products = JSON.parse(data);
            console.log(data)
        } catch (error) {
            // Handle file not found or other read errors
            console.log('Error loading products:', error);
            this.products = [];
        }
    }

   /* async saveProducts() {
        try {
            const data = JSON.stringify(this.products, null, 2);
            await fs.writeFile(this.path, data, 'utf-8');
        } catch (error) {
            console.log('Error saving products:', error);
        }
    }

    async getProducts() {
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.log('Error reading products:', error);
            return [];
        }
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        try {
            const products = await this.getProducts();

            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.log("Todos los campos son obligatorios");
            } else if (products.some(p => p.code === code)) {
                console.log(`Ya existe un producto con el código ${code}`);
            } else {
                const newProduct = {
                    id: this.id++,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                };
                products.push(newProduct);
                this.products = products; // Agregar esta línea
                await this.saveProducts();
                console.log(`El producto ${title} fue agregado exitosamente`);
            }
        } catch (error) {
            console.log('Error adding product:', error);
        }
    }

    async getProductById(id) {
        try {
            const products = await this.getProducts();
            const productById = products.find((p) => p.id === id);

            if (productById) {
                return productById;
            } else {
                console.log(`No existe ningún producto con el ID ${id}`);
            }
        } catch (error) {
            console.log('Error getting product by ID:', error);
        }
    }
}

// Ejemplo de uso
const productManager = new ProductManager();

// Agregar un producto
productManager.addProduct('Producto1', 'Descripción1', 10.99, 'thumbnail1.jpg', 'CODE1', 20);

// Consultar todos los productos
productManager.getProducts().then(allProducts => {
    console.log('Todos los productos:', allProducts);
});

// Consultar un producto por ID
const productId = 1;
productManager.getProductById(productId).then(foundProduct => {
    console.log('Producto con ID', productId, ':', foundProduct);
});*/
}