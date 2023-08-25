import React from "react"
import Item from "./Item";
import { useNavigate } from "react-router-dom";


const Samsung=()=>{


const navigate=useNavigate()

    return(
        <div>
            <h1>Samsung Page</h1>
            <p>welcome to the Samsung page</p>
            <Item name="Samsung Galaxy" link="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e346bzkdins/gallery/in-galaxy-f34-6gb-ram-sm-e346bzkdins-537686761?$1300_1038_PNG$"></Item>
            <Item name="Samsung Galaxy 4" link="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e346bzkdins/gallery/in-galaxy-f34-6gb-ram-sm-e346bzkdins-537686761?$1300_1038_PNG$"></Item>
            <Item name="Samsung Galaxy 5" link="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e346bzkdins/gallery/in-galaxy-f34-6gb-ram-sm-e346bzkdins-537686761?$1300_1038_PNG$"></Item>
            <Item name="Samsung Galaxy 6" link="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e346bzkdins/gallery/in-galaxy-f34-6gb-ram-sm-e346bzkdins-537686761?$1300_1038_PNG$"></Item>

            <button onClick={()=>navigate(-1)}>back</button>
            {/* <button onClick={()=>navigate("products/oppo")}>Go to oppo</button> */}
            <button onClick={()=>navigate("/products/apple")}>Go to apple1</button>
            {/* <button onClick={()=>navigate("products/apple")}>Go to apple2</button> */}
        </div>
    )
}

export default Samsung;