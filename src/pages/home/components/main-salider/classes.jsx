import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get_categories } from "../../../admin/api";

export default function Classes(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        get_categories().then(res=>setData(res.data));
    },[])
    return(
        <ul className="classes">
            {data.map((item,index)=>
                <li key={index} ><Link to={"/yyy"}>{item.name}</Link></li>
            )}
        </ul>
    )
}