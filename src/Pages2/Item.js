import React from "react";



const Item=({name,link})=>{



    return(

        <div className="item">
            <img src={link} alt=""></img>
            <h1>{name}</h1>
        </div>
    )
}

export default Item;