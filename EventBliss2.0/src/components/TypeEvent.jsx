import { categoryApi } from "../components/Api";
import { useState,useEffect } from "react";

export function TypeEvent(){
    const [categories,setCategories]= useState([]);
    
    useEffect(() => {
        async function loadOrganizersAndCategories(){
          const categories = await categoryApi()
          setCategories(categories.data)
        };
        loadOrganizersAndCategories();
      },[]);
    return(
        <select className="select select-bordered w-full max-w-xs"
        multiple>
          <option defaultValue>Event Type</option>
          {categories.map((category) =>
            <option key={category.id} value={category.id}>{category.name}</option>
          )
          }
        </select>
    )
}