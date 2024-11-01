import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "./cart/ShoppingCart";
import { CartContext } from "./context/cart";
import { useContext } from "react";
import axios from "axios";


export default function ProductView() {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const { cartItems, addToCart } = useContext(CartContext)
  const { id } = useParams();

  const toggle = () => {
    setshowModal(!showModal);
    console.log(showModal)
  };
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setCurrentProduct(res.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    getProduct();
  }, [id]);
 

 

  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex items-center">
                <a href="/" className="mr-4 text-sm font-medium text-gray-900">
                  {" "}
                  {currentProduct.category}{" "}
                </a>
                <svg
                  viewBox="0 0 6 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <a href="#" className="mr-4 text-sm font-medium text-gray-900">
                  {" "}
                  Clothing{" "}
                </a>
                <svg
                  viewBox="0 0 6 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {" "}
                {currentProduct.title}{" "}
              </a>
            </li>
          </ol>
        </nav>
        <div className='flex justify-between items-center px-20 py-5'>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
        {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          onClick={toggle}
        >Cart ({cartItems.length})</button>}
      </div>
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <p className="text-xl font-medium text-gray-900">
                  {currentProduct.title}
                </p>

                <p className="text-xl font-medium text-gray-900">
                  {currentProduct.price}
                </p>
              </div>

              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {currentProduct?.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    <svg
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="text-yellow-400 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="text-gray-200 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See all {currentProduct?.rating?.count} reviews
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <img
                  alt={currentProduct.title}
                  src={currentProduct.thumbnail}
                  className="lg:col-span-2 lg:row-span-2 rounded-lg"
                />
                <img
                  src={currentProduct.thumbnail}
                  alt="Side profile of women&#039;s Basic Tee in black."
                  className="hidden lg:block rounded-lg"
                />

                <img
                  src={currentProduct.thumbnail}
                  alt="Front of women&#039;s Basic Tee in black."
                  className="hidden lg:block rounded-lg"
                />
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <div>
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>

                  <fieldset className="mt-2">
                    <legend className="sr-only">Choose a color</legend>
                    <div className="flex items-center space-x-3">
                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                        <input
                          type="radio"
                          name="color-choice"
                          value="Black"
                          className="sr-only"
                          aria-labelledby="color-choice-0-label"
                        />
                        <p id="color-choice-0-label" className="sr-only">
                          Black
                        </p>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                        ></span>
                      </label>

                      <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input
                          type="radio"
                          name="color-choice"
                          value="Heather Grey"
                          className="sr-only"
                          aria-labelledby="color-choice-1-label"
                        />
                        <p id="color-choice-1-label" className="sr-only">
                          Heather Grey
                        </p>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 bg-gray-400 border border-black border-opacity-10 rounded-full"
                        ></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See dimensions
                    </a>
                  </div>

                  <fieldset className="mt-2">
                    <legend className="sr-only">Choose a size</legend>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XXS"
                          className="sr-only"
                          aria-labelledby="size-choice-0-label"
                        />
                        <p id="size-choice-0-label">{currentProduct?.dimensions?.width}</p>
                      </label>

                      <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XS"
                          className="sr-only"
                          aria-labelledby="size-choice-1-label"
                        />
                        <p id="size-choice-1-label">{currentProduct?.dimensions?.height}</p>
                      </label>

                      <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="size-choice"
                          value="S"
                          className="sr-only"
                          aria-labelledby="size-choice-2-label"
                        />
                        <p id="size-choice-2-label">{currentProduct?.dimensions?.depth}</p>
                      </label>

                      <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="size-choice"
                          value="M"
                          className="sr-only"
                          aria-labelledby="size-choice-3-label"
                        />
                        <p id="size-choice-3-label">M</p>
                      </label>

                      <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="size-choice"
                          value="L"
                          className="sr-only"
                          aria-labelledby="size-choice-4-label"
                        />
                        <p id="size-choice-4-label">L</p>
                      </label>

                      <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 opacity-25 cursor-not-allowed">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XL"
                          disabled
                          className="sr-only"
                          aria-labelledby="size-choice-5-label"
                        />
                        <p id="size-choice-5-label">XL</p>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <button onClick={() => {addToCart(currentProduct)}}
                  type="submit"
                  className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to cart
                </button>
              </form>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div className="mt-4 prose prose-sm text-gray-500">
                  <p> {currentProduct.description}</p>
                  <p>
                    Looking to stock your closet? The Basic tee also comes in a
                    3-pack or 5-pack at a bundle discount.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Fabric &amp; Care
                </h2>

                <div className="mt-4 prose prose-sm text-gray-500">
                  <ul role="list">
                    <li>Only the best materials</li>

                    <li>Ethically and locally made</li>

                    <li>Pre-washed and pre-shrunk</li>

                    <li>Machine wash cold with similar colors</li>
                  </ul>
                </div>
              </div>

              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                    <dt>
                      <svg
                        className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="mt-4 text-sm font-medium text-gray-900">
                        {" "}
                        International delivery{" "}
                      </span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">
                      Get your order in 2 years
                    </dd>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                    <dt>
                      <svg
                        className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="mt-4 text-sm font-medium text-gray-900">
                        {" "}
                        Loyalty rewards{" "}
                      </span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">
                      Don&#039;t look at other tees
                    </dd>
                  </div>
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Cart showModal={showModal} toggle={toggle}/>
    </div>
  );
}
