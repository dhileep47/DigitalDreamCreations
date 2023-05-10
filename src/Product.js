import 'firebase/firestore';
import db from "./Firebase";
import { useNavigate } from "react-router-dom";
import React, {useState,useEffect} from "react";
import { collection,getDocs } from "firebase/firestore";
 

const Product = (props) => {
    const {updatedata}=props
    const[data,setData]=useState();
    const navigate = useNavigate();
    const pro=collection(db, "Products");
    useEffect(()=>{
        const getAll = async() => {
            const data = await getDocs(pro);
            setData(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
        };
        getAll();
    },[]);
    console.log(data);
       
    const buy=(e)=>{updatedata(e.target.value); navigate("/Buynow");}

    return (
  <div className="container px-16 py-24 mx-auto">
    <div className="lg:grid grid-cols-4">
        {data && data.map((element)=>(
            <div  key={element.id} className="h-80 w-60 mb-8  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-4 h-52 w-full"src={element.img} alt="pim" />
              <div className="px-4">
                      <h5 className="text-xl font-semibold  text-gray-900 dark:text-white">{element.pname}</h5>
                  <div className="flex justify-between items-center mt-8">
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">{element.price}</p>
                      <button  className="bg-black hover:bg-white text-white hover:text-black border hover:border-black px-5 py-1 rounded-full" value={element.pname} onClick={buy}>Buy Now</button>
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