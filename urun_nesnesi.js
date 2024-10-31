//! product nesnesini tanımlama
const product = {
  productName: "Cep Telefonu",
  price: 12000,
  category: "Elektronik",
  inStock: true,
  displayInfo: function () {
    console.log("Ürün:" + this.productName + ", Fiyat:" + this.price + "₺");
  },
};

//! Bilgileri konsola yazdırma
console.log(product.productName);
console.log(product.price);

//! displayInfo metodunu çağırma
product.displayInfo();
