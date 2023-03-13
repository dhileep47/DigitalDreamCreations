import { Cardinfo } from "../Data/Cardinfo";
const Card = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Choose your own product</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Pick from our available products Customized Cup with photo,Magic cup with photo,Magic mirror with photo,Pillow with photo,Keychain with photo and Photo frames</p>
      </div>
      <div className="md:grid grid-cols-4">
        {Cardinfo.map(element => {
          return <div key={element.id} className="p-4">
            <div className="flex relative">
              <img alt="gallery" className="absolute w-full h-full object-center" src={element.img} />
              <div className="h-60 w=60 relative border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{element.product}</h1>
                <p className="leading-relaxed">{element.desc}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  ); 
}

export default Card;