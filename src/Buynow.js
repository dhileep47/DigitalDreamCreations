import React,{useState} from "react";

const Buynow = () => {
    const [showhide,setShowhide]=useState(''); 

    const handleshowhide=(event)=>{
        const getuser = event.target.value;
        console.log(getuser);
        setShowhide(getuser);
    }


    return ( 
   <div className="w-full">
     <h2 className="text-center font-bold text-2xl uppercase mb-10">Fill to capture your memories!</h2>
     <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form action="">
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" id="name" name="name" className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label htmlFor="email" className="block mb-2 font-bold text-gray-600">Email</label>
           <input type="email" id="email" name="email" className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label htmlFor="contact" className="block mb-2 font-bold text-gray-600">Phone</label>
           <input type="tel" id="contact" name="contact" className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label htmlFor="address" className="block mb-2 font-bold text-gray-600">Address</label>
           <textarea type="text" id="address" name="address" className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>
         <div className="mb-5">
           <label htmlFor="products" className="block mb-2 font-bold text-gray-600">Choose your product</label>
                 <select name="products" id="products" onChange={(e)=>(handleshowhide(e))}>
                   <option value="1">Photo Frames</option>
                   <option value="2">Cup  with photo</option>
                   <option value="3">Magic Cup  with photo</option>
                   <option value="4">Magic mirror  with photo</option>
                   <option value="5">Pillow  with photo</option>
                   <option value="6">Keychain  with photo</option>
                   <option value="7">T-Shirt  with photo</option>
                   <option value="8">Wedding events</option>
                  
                 </select>
                    </div> 

     {
        showhide==='1' &&(
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
         <button className="text-lg w-full bg-black hover:bg-white text-white hover:text-black border hover:border-black  py-4 rounded-full">Buy now</button>
       </form>
     </div>
   </div>
     );
}
 
export default Buynow;