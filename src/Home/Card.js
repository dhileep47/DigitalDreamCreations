import card1 from "../Home/../assest/card1.avif";
import card2 from "../Home/../assest/card2.webp";
import card3 from "../Home/../assest/card3.jpg";
import card4 from "../Home/../assest/card3.jpg";
import card5 from "../Home/../assest/card3.jpg";
import card6 from "../Home/../assest/card3.jpg";
import card7 from "../Home/../assest/card3.jpg";
import card8 from "../Home/../assest/card3.jpg";
const Card = () => {
  return (
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Choose your own product</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Pick form our available products Customized Cup with photo,Magic cup with photo,Magic mirror with photo,Pillow with photo,Keychain with photo and Photo frames</p>
        </div>
        <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 sm:w-1/2 p-4">
            <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={card2}/>
                <div class="h-60 w=60 relative border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">MAGIC CUP WITH PHOTO</h1>
                  <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </div>
          </div>
        </div>
      </div>



  );
}

export default Card;