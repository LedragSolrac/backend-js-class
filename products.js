class ProductManager{
    
    constructor(){
        this.products=[]
    }

    addProducts( title, description, price, thumbnail, code, stock){
        let newProduct={
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if(this.products.length === 0){
            newProduct.id = 1
        } else {
            newProduct.id = this.products[this.products.length -1].id + 1;
        }

        
        if (this.products.find(prod => prod.title === newProduct.title) || this.products.find(prod => prod.description === newProduct.description) || this.products.find(prod => prod.price === newProduct.price) || this.products.find(prod => prod.thumbnail === newProduct.thumbnail) || this.products.find(prod => prod.code === newProduct.code) || this.products.find(prod => prod.stock === newProduct.stock)){
            console.error("Product already Exist!");
            return "Product already Exist!";
        } else {
            this.products.push(newProduct);
        }
        
    }

    getProducts(){
        return this.products
    }

    getProductById(productId){
        let searchedProductId = this.products.findIndex(prod => prod.id == productId);
        
        if (searchedProductId === -1){
            console.error("Not found"); 
            return "Not Found";          
        } else {
            return this.products[searchedProductId];
        }
    }

}

let productManagerClass = new ProductManager();

console.log(productManagerClass.getProducts());

productManagerClass.addProducts("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25);

console.log(productManagerClass.getProducts());

productManagerClass.addProducts("producto prueba", "Este es un producto pruebas", 2050, "Sin Imagsen", "asdabc123", 250);
productManagerClass.addProducts("proasdducto prueba", "Este es un producto prueba", 123200, "Sin Imaasdgen", "ab213c123", 2556);
productManagerClass.addProducts("producto1 prueba", "Este es un asdproducto prueba", 2200, "Sin Imagawden", "a12bc123", 25);

console.log(productManagerClass.getProducts());

console.log(productManagerClass.getProductById(1));
console.log(productManagerClass.getProductById(5));