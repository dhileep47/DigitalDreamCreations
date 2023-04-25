// import img1 from "./assest/gal3.avif"
import 'firebase/firestore';
import db from "./Firebase";
import { Link } from "react-router-dom";

import React, {useState,useEffect} from "react";
import { collection,getDocs } from "firebase/firestore";
 

const Product = () => {
    const[data,setData]=useState();
    const pro=collection(db, "Products");
    useEffect(()=>{
        const getAll = async() => {
            const data = await getDocs(pro);
            setData(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
        };
        getAll();
    },[]);
    console.log(data);
        

    return (
  <div className="container px-16 py-24 mx-auto">
    <div className="lg:grid grid-cols-4">
        {data && data.map((element)=>(
            <div  key={element.id} className="h-80 w-80 mb-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-4 h-52 w-full"src={element.img} alt="pim" />
              <div className="px-4">
                      <h5 className="text-xl font-semibold  text-gray-900 dark:text-white">{element.pname}</h5>
                  <div className="flex justify-between mt-8">
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">{element.price}</p>
                      <Link to={'/buynow'}>
                      <button  className="bg-black hover:bg-white text-white hover:text-black border hover:border-black px-5 py-1 rounded-full">Buy Now</button>
                      </Link>
                  </div>
              </div>
        </div>

        ))
        }
           
    </div>
  </div>

      );
}
 
export default Product;