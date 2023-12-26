const fs = require('fs');

class ProductManager {
    constructor() {
        this.path = './products.json';
    }

    async readProducts() {
        try {
            let data = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.log('Error al obtener los productos:', error);
            return [];
        }
    }

    async showProducts() {
        try {
            const products = await this.readProducts();
            console.log('Lista de Productos:');
            console.log(products);
        } catch (error) {
            console.log('Error:', error);
        }
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        try {
            // Leer productos existentes
            let existingProducts = await this.readProducts();

            // Obtener el próximo ID disponible
            const newId = existingProducts.length > 0 ? existingProducts[existingProducts.length - 1].id + 1 : 1;

            // Verificar duplicados
            if (existingProducts.some(p => p.code === code)) {
                console.log(`Ya existe un producto con el código ${code}`);
            } else {
                // Agregar nuevo producto con el nuevo ID
                let newProduct = {
                    id: newId,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                };

                existingProducts.push(newProduct);

                // Escribir productos actualizados al archivo
                await fs.promises.writeFile(this.path, JSON.stringify(existingProducts, null, 2), 'utf-8');
                console.log(`Producto ${title} agregado correctamente.`);

                // Mostrar todos los productos después de agregar uno
                await this.showProducts();
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    async getProductById(id) {
        try {
            const products = await this.readProducts();
            const product = products.find(p => p.id === id);

            if (product) {
                console.log('Producto encontrado:');
                console.log(product);
            } else {
                console.log(`No se encontró ningún producto con el ID ${id}`);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
}



// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct(
    `ZAPATILLAS RUNNING ADIDAS DURAMO SL 10 NEGRA`,
    `Mantené tus pies cómodos y tu estilo impecable en todo momento con estas zapatillas ADIDAS. Usalas con tus shorts de running favoritos para lucir un look deportivo y casual. El exterior de malla ayuda a mantener tus pies frescos, mientras que la amortiguación ultraliviana te ofrece soporte en cada uno de tus pasos. Hechas con una serie de materiales reciclados, su exterior incorpora al menos un 50 % de contenido reciclado. Este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.`,
    74999,
    `No hay imagen`,
    `SKU 100010GW8336001`,
    9)

productManager.addProduct(
    `ZAPATILLAS DE BASQUET UNDER ARMOUR CURRY 10 DUB NATION AZUL`,
    `Cambie de dirección, rápido. La amortiguación UA Flow no contiene goma, lo que hace que estos zapatos sean livianos y con un agarre ridículo. La parte superior UA Warp funciona como mini cinturones de seguridad que te sujetan. Juntos, obtienes velocidad y control para detenerte y arrancar. La tecnología superior UA WARP proporciona mayor comodidad y control durante los movimientos dinámicos del baloncesto. Plantilla de mezcla de TPE con ajuste de baja compresión para retorno de energía y longevidad. La tecnología de amortiguación UA Flow es súper ligera, rebota y proporciona un agarre increíble. La caña interna en la parte media del pie añade soporte y estabilidad a cada movimiento. La duradera suela UA Flow proporciona una mejor sensación en la cancha para que puedas cortar y parar/empezar más rápido que nunca.`,
    199999,
    `No hay imagen`,
    `SKU 700013026949400`,
    4
)

productManager.addProduct(
    `OJOTAS LACOSTE CROCO 119 VERDE`,
    `Estilo veraniego perfecto en estas ojotas discretas y listas para el resort inspirados en la herencia del tenis de LACOSTE. El diseño está hecho de caucho repelente al agua y cuenta con una plantilla moldeada para garantizar la comodidad. Las suelas presentan detalles de líneas diagonales que hacen referencia a la cancha de tenis y maximizan el agarre antideslizante. La marca de cocodrilo de gran tamaño en colores contrastantes agrega un acabado sobresaliente.`,
    55000,
    `No hay imagen`,
    `SKU 40001MA018BR1R7`,
    10
)

productManager.addProduct(
    'CAMPERA ADIDAS RUNNING OWN THE RUN NEGRA', 'Rétate a correr bajo la lluvia y termina sintiéndote fuerte, seguro y listo para lo que viene. Ponete esta campera de running ADIDAS para sentir el soporte que necesitas en el camino. Repele el aire frío y la lluvia ligera mientras te permite moverte con libertad. Los detalles reflectantes te hacen más visible en condiciones de poca luz. Regular fit. Cuello alto con capucha. Puños elastizados. Bolsillos laterales con pequeño bolsillo interno con cierre. Cintura con cordón de ajuste. Logo ADIDAS y detalles en estampado reflectivos.',
    87.999,
    'No hay imagen',
    'SKU 100020H58592001',
    3);



/*productManager.getProductById(1)
.then(result => {
    console.log(result); // Imprimirá el producto o null
})
.catch(error => {
    console.log('Error:', error);
})


/*class ProductManager {
constructor() {
    this.path = path;
    this.id = 1
}
}

class ProductManager {
constructor() {
    this.products = []
    this.id = 1;
}

getProducts() {
    return this.products;
}

addProducts(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios");
    } else if (this.products.some(p => p.code === code)) {
        console.log(`Ya existe un producto con el código ${code}`);
    } else {
        let newProduct = {
            id: this.id++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
        console.log(`El producto ${title} fue agregado exitosamente`);
    }
}

getProductById(id) {
    let productById = this.products.find((p) => p.id === id)
    if (productById) {
        return productById
    } else {
        console.log(`No existe ningún producto con el ID ${id}`)
    }
}
}

const products = new ProductManager();

products.addProducts(
"ZAPATILLAS RUNNING ADIDAS DURAMO SL 10 NEGRA",
"Mantené tus pies cómodos y tu estilo impecable en todo momento con estas zapatillas ADIDAS. Usalas con tus shorts de running favoritos para lucir un look deportivo y casual. El exterior de malla ayuda a mantener tus pies frescos, mientras que la amortiguación ultraliviana te ofrece soporte en cada uno de tus pasos. Hechas con una serie de materiales reciclados, su exterior incorpora al menos un 50 % de contenido reciclado. Este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.",
74999,
"No hay imagen",
"SKU 100010GW8336001",
9
);

products.addProducts(
"ZAPATILLAS DE BASQUET UNDER ARMOUR CURRY 10 DUB NATION AZUL",
"Cambie de dirección, rápido. La amortiguación UA Flow no contiene goma, lo que hace que estos zapatos sean livianos y con un agarre ridículo. La parte superior UA Warp funciona como mini cinturones de seguridad que te sujetan. Juntos, obtienes velocidad y control para detenerte y arrancar. La tecnología superior UA WARP proporciona mayor comodidad y control durante los movimientos dinámicos del baloncesto. Plantilla de mezcla de TPE con ajuste de baja compresión para retorno de energía y longevidad. La tecnología de amortiguación UA Flow es súper ligera, rebota y proporciona un agarre increíble. La caña interna en la parte media del pie añade soporte y estabilidad a cada movimiento. La duradera suela UA Flow proporciona una mejor sensación en la cancha para que puedas cortar y parar/empezar más rápido que nunca.",
199999,
"No hay imagen",
"SKU 700013026949400",
4
);

products.addProducts(
"OJOTAS LACOSTE CROCO 119 VERDE",
"Estilo veraniego perfecto en estas ojotas discretas y listas para el resort inspirados en la herencia del tenis de LACOSTE. El diseño está hecho de caucho repelente al agua y cuenta con una plantilla moldeada para garantizar la comodidad. Las suelas presentan detalles de líneas diagonales que hacen referencia a la cancha de tenis y maximizan el agarre antideslizante. La marca de cocodrilo de gran tamaño en colores contrastantes agrega un acabado sobresaliente.",
55000,
"No hay imagen",
"SKU 40001MA018BR1R7",
10
)

console.log(products.getProducts())
console.log(`-------------------------------------------------------------------------------`)
console.log(products.getProductById(1))
console.log(`-------------------------------------------------------------------------------`)
console.log(products.getProductById(5))*/