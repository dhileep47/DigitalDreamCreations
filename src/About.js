import image1 from "./assest/gal1.avif";
import image2 from "./assest/gal2.jpg";
import image3 from "./assest/gal3.avif";
import image4 from "./assest/gal4.avif";
import image5 from "./assest/gal5.avif";
import image6 from "./assest/gal6.avif";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <p className="p-4 mx-auto md:text-7xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl text-center">
          Beautiful moment is everything
        </p>

        <div className="flex flex-col w-full mb-20">
          <h1 className="mt-10 mx-auto sm:text-6xl text-3xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-center">
            What we do!
          </h1>
          <p className="p-8 lg:pl-6 text-lg lg:w-2/3 mx-auto leading-relaxed text-center">
            Digital Dream Creations is a unique entity that came up with a
            vision of beautifying the memories of people who are looking
            forward. We create happiness by printing the most cherished memories
            of your life on frames, canvas, and acrylic. We are situated in the
            small town of Perundurai and heading towards reaching all our
            customers easily. We work with a small team with a passion for
            making it a big brand by providing quality in everything. We are
            committed to creating customized photo frames, magic cups,
            keychains, pillows, t-shirts, and wedding & event photoshoots with
            the best quality and personalized care. Right from traditional
            frames, we provide you with tremendous options to adore your
            memories.
          </p>
        </div>

        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={image1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={image2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={image3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={image4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={image5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={image6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
