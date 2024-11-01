import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/cart";
import Cart from "./cart/ShoppingCart";

const baseUrl = "https://dummyjson.com/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);

  const toggle = () => {
    setshowModal(!showModal);
    console.log(showModal);
  };

  async function getProducts() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    setProducts(data.products);
    setRecords(data.products);

    // Extract unique categories from products
    const uniqueCategories = [
      ...new Set(data.products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const Filter = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "all") {
      setRecords(products); // Show all products if "all" is selected
    } else {
      setRecords(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between  items-center px-20 py-5">
          {/* Dropdown for Category Filtering */}
          <select className="form-controle bg-gray-800 text-white text-xl rounded-lg"  onChange={Filter}>
            <option  value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
            Products
          </h1>
          {!showModal && (
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={toggle}
            >
              Cart ({cartItems.length})
            </button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
          {records.map((p) => (
            <a key={p.id} className="group block">
              <div className="bg-white shadow-md rounded-lg px-10 py-10">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="rounded-md h-48"
                />
              </div>
              <button className="relative z-10 w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-sm text-gray-900 opacity-0 focus:opacity-100 group-hover:opacity-100">
                <a href={`/Details/${p.id}`}>Quick View</a>
              </button>
              <h3 className="mt-4 text-sm text-gray-700">{p.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {p.price}$
              </p>
            </a>
          ))}
        </div>
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
  );
}
