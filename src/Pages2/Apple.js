import React from "react"
import Item from "./Item"
import { useNavigate } from "react-router-dom"


const Apple=()=>{
    let navigate=useNavigate()




    return(
        <div>
            <h1>Apple Page</h1>
            <p>welcome to the Apple page</p>
            <Item name="mac pro 1" link="https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"></Item>
            <Item name="mac pro 2" link="https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"></Item>
            <Item name="mac pro 3" link="https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"></Item>
            <Item name="mac pro 4" link="https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"></Item>
           
            <button onClick={()=>navigate("/products/samsung")}>Go to Samsung</button>
        </div>
    )
}

export default Apple;


