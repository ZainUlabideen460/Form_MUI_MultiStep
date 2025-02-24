import React, { useState } from 'react';

const Product = () => {
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [syrupQuantity, setSyrupQuantity] = useState('');
  const [greenTeaQuantity, setGreenTeaQuantity] = useState('');
  const [iceQuantity, setIceQuantity] = useState('');
  const [additionalSubCategory, setAdditionalSubCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [purchasePrice, setPurchasePrice] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  const categories = ['FRUIT TEA', 'SPECIAL FRUIT TEA', 'Milk Tea', 'SPECIAL MILK TEA', 'LASSI', 'SMOOTHIES'];
  const products = {
    'FRUIT TEA': ['Kiwi Fruit Tea', 'Strawberry Fruit Tea', 'Mango Fruit Tea', 'Peach Fruit Tea'],
    'SPECIAL FRUIT TEA': ['Two-Mix Flavor Fruit Tea', 'Three-Mix Flavor Fruit Tea'],
    'Milk Tea': ['Avocado Milk Tea', 'Blueberry Milk Tea', 'Cantaloupe Milk Tea', 'Caramel Milk Tea'],
    'SPECIAL MILK TEA': ['Two-Mix Flavor Milk Tea', 'Three-Mix Flavor Milk Tea'],
    'LASSI': ['Chocolate', 'Mango', 'Melon', 'Strawberry', 'Vanilla'],
    'SMOOTHIES': ['Acai Banana Smoothie', 'Lemon Mint Smoothie', 'Mango Smoothie', 'Raspberry Smoothie', 'Strawberry Smoothie', 'Wild berry Smoothie']
  };

  const subCategories = {
    'FRUIT TEA': ['SYRUP', 'GREEN TEA', 'ICE'],
    'SPECIAL FRUIT TEA': ['MIX SYRUP', 'ICE', 'GREEN TEA'],
    'Milk Tea': ['SYRUP', 'FLAVOR', 'TEA POWDER', 'ICE'],
    'SPECIAL MILK TEA': ['MIX FLAVOR', 'TEA POWDER', 'ICE'],
    'LASSI': ['FLAVOR', 'SUGAR', 'YOGURT', 'ICE'],
    'SMOOTHIES': ['ICE CREAM', 'GREEN TEA', 'ICE']
  };

  const quantities = {
    '500cc': {
      SYRUP: ['50 ml', '250 ml', '200 ml'],
      'GREEN TEA': ['75 ml', '350 ml', '275 ml'],
      ICE: ['50 ml', '250 ml', '200 ml'],
      FLAVOR: ['50 ml', '250 ml', '200 ml'],
      'TEA POWDER': ['50 ml', '250 ml', '200 ml']
    },
    '700cc': {
      SYRUP: ['75 ml', '350 ml', '275 ml'],
      'GREEN TEA': ['100 ml', '450 ml', '375 ml'],
      ICE: ['75 ml', '350 ml', '275 ml'],
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setProduct('');
    setQuantity('');
    setSyrupQuantity('');
    setGreenTeaQuantity('');
    setIceQuantity('');
    setAdditionalSubCategory('');
  };

  const handleProductChange = (e) => {
    setProduct(e.target.value);
    setSyrupQuantity('');
    setGreenTeaQuantity('');
    setIceQuantity('');
    setAdditionalSubCategory('');
  };

  const handleQuantityChange = (e) => {
    const selectedQuantity = e.target.value;
    setQuantity(selectedQuantity);
    setSyrupQuantity('');
    setGreenTeaQuantity('');
    setIceQuantity('');
    setAdditionalSubCategory('');
  };

  const handleSubCategoryChange = (e, subCategory) => {
    if (subCategory === 'SYRUP') setSyrupQuantity(e.target.value);
    if (subCategory === 'GREEN TEA') setGreenTeaQuantity(e.target.value);
    if (subCategory === 'ICE') setIceQuantity(e.target.value);
    setAdditionalSubCategory(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newProduct = {
        category,
        product,
        quantity,
        syrupQuantity,
        greenTeaQuantity,
        iceQuantity,
        additionalSubCategory,
        purchasePrice,
        purchaseDate
      };

      setProductsList([...productsList, newProduct]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    
    <div className="relative w-full h-screen mx-auto p-6 bg-gradient-to-r from-blue-200 to-teal-100 rounded-xl shadow-lg">
      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center z-50">
          <div className="text-center">
            <img src="logo.png" alt="Logo" className="w-16 h-16 animate-spin" />
          </div>
        </div>
      )}

      {/* Form for Adding Product */}
      <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-blue-400">
        <h2 className="text-2xl text-start font-semibold text-blue-800 mb-6">Add Product</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-600 text-lg mb-2">Category:</label>
              <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Product field */}
            <div>
              <label className="block text-gray-600 text-lg mb-2">Product:</label>
              <select
                value={product}
                onChange={handleProductChange}
                className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg"
              >
                <option value="">Select Product</option>
                {products[category]?.map((prod) => (
                  <option key={prod} value={prod}>
                    {prod}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quantity field */}
          <div className="mb-6">
            <label className="block text-gray-600 text-lg mb-2">Quantity:</label>
            <select
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg"
            >
              <option value="">Select Quantity</option>
              <option value="500cc">500cc</option>
              <option value="700cc">700cc</option>
            </select>
          </div>

          {/* Subcategories fields */}
          {subCategories[category]?.map((subCategory) => (
            <div key={subCategory} className="mb-6">
              <label className="block text-gray-600 text-lg mb-2">{subCategory}:</label>
              <select
                value={
                  subCategory === 'SYRUP'
                    ? syrupQuantity
                    : subCategory === 'GREEN TEA'
                    ? greenTeaQuantity
                    : iceQuantity
                }
                onChange={(e) => handleSubCategoryChange(e, subCategory)}
                className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg"
                disabled={!quantities[quantity] || !quantities[quantity][subCategory]}
              >
                <option value="">Select {subCategory} Quantity</option>
                {quantities[quantity] && quantities[quantity][subCategory]?.map((quant) => (
                  <option key={quant} value={quant}>
                    {quant}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* New Fields: Purchase Price and Purchase Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 text-lg mb-2">Purchase Price:</label>
              <input
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-lg mb-2">Purchase Date:</label>
              <input
                type="date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Product;
