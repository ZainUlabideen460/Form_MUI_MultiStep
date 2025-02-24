import React, { useState } from 'react';

const Product = () => {
  const [showModal, setShowModal] = useState(false);
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
      FLAVOR:['50 ml', '250 ml', '200 ml'],
      'TEA POWDER':['50 ml', '250 ml', '200 ml']
    },
    '700cc': {
      SYRUP: ['75 ml', '350 ml', '275 ml'],
      'GREEN TEA': ['100 ml', '450 ml', '375 ml'],
      ICE: ['75 ml', '350 ml', '275 ml'],
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setProduct('');
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
        additionalSubCategory
      };

      setProductsList([...productsList, newProduct]);
      setIsLoading(false);
      setShowModal(false);
    }, 2000); // Simulate a delay (e.g., for form submission)
  };

  const handleDelete = (index) => {
    setProductsList(productsList.filter((_, i) => i !== index));
  };

  const handleUpdate = (index) => {
    const productToUpdate = productsList[index];
    setCategory(productToUpdate.category);
    setProduct(productToUpdate.product);
    setQuantity(productToUpdate.quantity);
    setSyrupQuantity(productToUpdate.syrupQuantity);
    setGreenTeaQuantity(productToUpdate.greenTeaQuantity);
    setIceQuantity(productToUpdate.iceQuantity);
    setAdditionalSubCategory(productToUpdate.additionalSubCategory);

    // Delete the product temporarily and show the modal for updating
    setProductsList(productsList.filter((_, i) => i !== index));
    setShowModal(true);
  };

  const filteredProducts = productsList.filter(product =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
    <div className="flex justify-between mb-2">
  <input
    type="text"
    placeholder="Search Product..."
    className="py-2 px-3 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button
    onClick={() => setShowModal(true)}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
  >
    Add Product
  </button>
</div>


      {/* Loader */}
      {isLoading && (
  <div className="fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center z-50">
    <div className="text-center flex flex-col justify-center items-center">
      <img src="logo.png" alt="Logo" className=" w-16 h-16 animate-spin" />
      {/* Adjust the spinner to appear inside the same container */}
      {/* <div className="spinner-border text-blue-600 animate-spin rounded-full border-t-4 border-blue-600 w-16 h-16"></div> */}
    </div>
  </div>
)}


    {/* Modal */}
{showModal && (
  <div className="modal fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center z-40">
    <div className="modal-content bg-white p-8 rounded-lg shadow-xl w-full max-w-md animate__animated animate__fadeIn animate__faster animate__zoomIn max-h-[80vh] overflow-y-auto">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
      >
        &times;
      </button>
      <h2 className="text-3xl text-center text-gray-800 font-semibold mb-6">Add Product</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-6">
          <label className="block text-gray-600 mb-2 text-lg">Category:</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {category && (
          <div className="mb-6">
            <label className="block text-gray-600 mb-2 text-lg">Product:</label>
            <select
              value={product}
              onChange={handleProductChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
            >
              <option value="">Select Product</option>
              {products[category]?.map((prod) => (
                <option key={prod} value={prod}>
                  {prod}
                </option>
              ))}
            </select>
          </div>
        )}

        {product && (
          <div className="mb-6">
            <label className="block text-gray-600 mb-2 text-lg">Quantity:</label>
            <select
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
            >
              <option value="">Select Quantity</option>
              <option value="500cc">500cc</option>
              <option value="700cc">700cc</option>
            </select>
          </div>
        )}

        {quantity && subCategories[category]?.map((subCategory) => (
          <div key={subCategory} className="mb-6">
            <label className="block text-gray-600 mb-2 text-lg">{subCategory}:</label>
            <select
              value={subCategory === 'SYRUP' ? syrupQuantity : subCategory === 'GREEN TEA' ? greenTeaQuantity : iceQuantity}
              onChange={(e) => handleSubCategoryChange(e, subCategory)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
            >
              <option value="">Select {subCategory} Quantity</option>
              {quantities[quantity][subCategory]?.map((quant) => (
                <option key={quant} value={quant}>
                  {quant}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}


      {/* Table for displaying products */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600">Product</th>
              <th className="py-3 px-4 text-left text-gray-600">Category</th>
              <th className="py-3 px-4 text-left text-gray-600">Syrup</th>
              <th className="py-3 px-4 text-left text-gray-600">Green Tea</th>
              <th className="py-3 px-4 text-left text-gray-600">Ice</th>
              <th className="py-3 px-4 text-left text-gray-600">Quantity (cc)</th>
              <th className="py-3 px-4 text-left text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{product.product}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">{product.syrupQuantity}</td>
                <td className="py-3 px-4">{product.greenTeaQuantity}</td>
                <td className="py-3 px-4">{product.iceQuantity}</td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleUpdate(index)}
                    className="mr-2 text-white px-3 py-1 bg-green-500 rounded-md hover:text-blue-800"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-white px-3 py-1 bg-red-600 rounded-md hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
