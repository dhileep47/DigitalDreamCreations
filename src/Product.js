import img1 from "./assest/gal3.avif"
const Product = () => {
    return (
  <div className="container px-16 py-24 mx-auto">
    <div className="lg:grid grid-cols-4">
        <div class="h-80 w-80 mb-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="p-4 h-52 w-full"src={img1} alt="product image" />
              <div class="px-4">
                      <h5 class="text-xl font-semibold  text-gray-900 dark:text-white">Photo Frame</h5>
                  <div class="flex justify-between mt-8">
                      <p class="text-3xl font-bold text-gray-900 dark:text-white">₹199</p>
                      <a href="#" class="bg-black hover:bg-white text-white hover:text-black border hover:border-black px-5 py-1 rounded-full">Buy Now</a>
                  </div>
              </div>
        </div>
        


    </div>
  </div>

      );
}
 
export default Product;