import React ,{ useRef } from "react";
import db from "./Firebase";
import { collection,addDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Contact = () => {

  const feedNameRef = useRef();
  const feedMailRef = useRef();
  const feedMsgRef = useRef();

  const feedRef = collection(db,"Feedback");

  const navigate = useNavigate();

  const storeFeed = async() =>{
    const name=feedNameRef.current.value;
    const mail=feedMailRef.current.value;
    const msg=feedMsgRef.current.value;

    await addDoc(feedRef,{
      Name:name,
      Mail:mail,
      Msg:msg
    });
    alert("sent successfully");
    navigate("/contact");
  };



    return ( 
    <div>
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=DIGITAL%20DREAM%20Creations,%20145/5%20Sri%20Ganapathy%20Complex,%20Erode%20Main%20Rd,%20opp.%20Taluk%20Office%20Road,%20Perundurai,%20Tamil%20Nadu%20638052+(Digital%20dream%20Creations)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">145/5 Sri Ganapathy Complex, Erode Main Rd, opp. Taluk Office Road, Perundurai, Tamil Nadu 638052</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a href="mailto:digitaldream7474@gmail.com" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">digitaldream7474@gmail.com</a>

          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">9789574725</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-4xl mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-lg text-gray-600">We love hearing from you!</p>
      <form onSubmit={storeFeed}>
      
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" ref={feedNameRef} className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" ref={feedMailRef} className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" ref={feedMsgRef} className="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
      </div>
      
      <div className="flex justify-center mt-8">
              <button  type="submit" className="bg-black hover:bg-white text-white hover:text-black border hover:border-black text-lg px-20 py-4 rounded-full">Submit</button>
            </div>
            
</form>
           
          
    </div>
  </div>
</section>
</div>
   
     );
}
 
export default Contact;