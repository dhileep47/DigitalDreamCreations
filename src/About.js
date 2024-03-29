import image1 from "./assest/gal1.avif";
import image2 from "./assest/gal2.jpg";
import image3 from "./assest/gal3.avif";
import image4 from "./assest/gal4.avif";
import image5 from "./assest/gal5.avif";
import image6 from "./assest/gal6.avif";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (  
            <section className="text-gray-600 body-font">
              
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
  <Flip>     
      <p className="p-4 mx-auto md:text-7xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl">Beautiful moment is everyting</p>
                </Flip>
    <Fade big>
      
    <div className="flex flex-col w-full mb-20 flex-wrap">
      <h1 className="mt-10 mx-auto  sm:text-6xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">What we do!</h1>
      <p className="p-8  lg:pl-6 text-xl lg:w-2/3 mx-auto leading-relaxed ">Digital Dream Creations is a unique entity that came up with a vision of beautifying the memories of people who are looking forward. We create happiness by printing the most cherished memories of your life on frames canvas and acrylic. We are Situated in the small town of Perundurai and heading towards reaching all our customers easily.We work with a small team with a passion for making it a big brand by providing quality in everything. We are committed to creating customized photo frames,magic cups,keychains,pillows,t-shirts and wedding & event photoshoots with the best quality and personalized care. Right from traditional frames we provide you with tremendous options to adore your memories.</p>
    </div>
      </Fade>            
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={image1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={image2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={image3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={image4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={image5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={image6}/>
        </div>
      </div>
    </div>
  </div>
</section>
      
    );
}
 
export default About;