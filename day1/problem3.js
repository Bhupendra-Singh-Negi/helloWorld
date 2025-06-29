var prompt = require('prompt-sync')();

function Product(name,price,isStock){
    this.name=name;
    this.price=price;
    this.isStock=isStock;
}

function getProductDetails() {
    let name = prompt("Enter product name: ");
    let price = parseFloat(prompt("Enter product price: "));
    let isStock = prompt("Is the product in stock? (yes/no): ").toLowerCase() === 'yes';
    
    return new Product(name, price, isStock);
}

const products=[];
for(let i=0;i<3;i++){
    console.log(`Enter details for product ${i+1}:`);
    products.push(getProductDetails());
}

products.forEach((product, index) => {
    console.log(`Product ${index + 1}:`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`In Stock: ${product.isStock ? 'Yes' : 'No'}\n`);
});