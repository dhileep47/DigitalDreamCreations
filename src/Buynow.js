import React,{useState,useRef} from "react";
import { collection,  addDoc} from "firebase/firestore";
import db from "./Firebase";

const Buynow = () => {
    const [showhide,setShowhide]=useState('Photo Frames'); 

    const handleshowhide=(event)=>{
        const getuser = event.target.value;
        setShowhide(getuser);
    }

    const ordNameRef = useRef();
    const ordMailRef = useRef();
    const ordPhnRef = useRef();
    const ordAddRef = useRef();
    const ordProRef = useRef();

    const ordRef = collection(db,"Orders");

    const Addorder = async(e)=>{
      const name=ordNameRef.current.value;
      const mail=ordMailRef.current.value;
      const phn=ordPhnRef.current.value;
      const add=ordAddRef.current.value;
      const pro=ordProRef.current.value;
      console.log(e);
      e.preventDefault();

      await addDoc(ordRef,{
        Name:name,
        Mail:mail,
        Phn:phn,
        Address:add,
        Product:pro
    
      });
      console.log(name,pro);


    }
    


    return ( 
   <div className="w-full">
     <h2 className="text-center font-bold text-2xl uppercase mb-10">Fill to capture your memories!</h2>
     <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" id="name" name="name" ref={ordNameRef} className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label htmlFor="email" className="block mb-2 font-bold text-gray-600">Email</label>
           <input type="email" id="email" name="email" ref={ordMailRef} className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label htmlFor="contact" className="block mb-2 font-bold text-gray-600">Phone</label>
           <input type="tel" id="contact" name="contact" ref={ordPhnRef} className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label htmlFor="address" className="block mb-2 font-bold text-gray-600">Address</label>
           <textarea type="text" id="address" name="address" ref={ordAddRef}  className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label htmlFor="products" className="block mb-2 font-bold text-gray-600">Choose your product</label>
                 <select  name="products" id="products"  ref={ordProRef} onChange={(e)=>(handleshowhide(e))}>
                   <option value="Photo Frames">Photo Frames</option>
                   <option value="Cup  with photo">Cup  with photo</option>
                   <option value="Magic Cup  with photo">Magic Cup  with photo</option>
                   <option value="Magic mirror  with photo">Magic mirror  with photo</option>
                   <option value="Pillow  with photo">Pillow  with photo</option>
                   <option value="Keychain  with photo">Keychain  with photo</option>
                   <option value="T-Shirt  with photo">T-Shirt  with photo</option>
                   <option value="Wedding events">Wedding events</option>
                  
                 </select>
                    </div>
                    {showhide!=='Wedding events'&&(
                    <div className="mb-5">
                      <p>Upload here</p>
                      <input type="file" /> 
                    </div>
                    )}

                     

     {
        showhide==='Photo Frames' &&(
            <div className="mb-8">
            <label htmlFor="products" className="block mb-2 font-bold text-gray-600">Select frame size</label>
                  <select name="products" id="products">
                    <option value="1">6 X 4</option>
                    <option value="2">Cup  with photo</option>
                    <option value="3">Magic Cup  with photo</option>
                    <option value="4">Magic mirror  with photo</option>
                    <option value="5">Pillow  with photo</option>
                    <option value="6">Keychain  with photo</option>
                    <option value="7">T-Shirt  with photo</option>
                    <option value="8">Wedding events</option>
                  </select>

                  <div className="mt-4 mb-5">
           <label htmlFor="products" className="block mb-2 font-bold text-gray-600">Select frame type</label>
                 <select name="products" id="products">
                   <option value="1">Glass</option>
                   <option value="2">Cup  with photo</option>
                   <option value="3">Magic Cup  with photo</option>
                   <option value="4">Magic mirror  with photo</option>
                   <option value="5">Pillow  with photo</option>
                   <option value="6">Keychain  with photo</option>
                   <option value="7">T-Shirt  with photo</option>
                   <option value="8">Wedding events</option>
                  
                 </select>
                    </div> 
                     </div> 
                     
        )
     }
     {
        showhide==='Wedding events' &&(
          <div className="mb-5">
          <label htmlFor="address" className="block mb-2 font-bold text-gray-600">Event Location</label>
          <textarea type="text" id="address" name="address"   className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
        </div>
                     
        )
     }
         <button className="text-lg w-full bg-black hover:bg-white text-white hover:text-black border hover:border-black  py-2 px-3 rounded-full" onClick={Addorder}>Buy now</button>
       </form>
     </div>
   </div>
     );
}


export default Buynow;