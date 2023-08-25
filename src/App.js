// pages

// import React from "react";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Blog from "./Pages/Blog";
// import Home from "./Pages/Home";
// import {Routes,Route} from "react-router-dom";
// import Navbar from "./Pages/Navbar";
// import Error from "./Pages/Error";



// pages2
import React from "react";

import Samsung from "./Pages2/Samsung";
import Apple from "./Pages2/Apple";
import {Routes,Route} from "react-router-dom"
import Oppo from "./Pages2/Oppo";
import Products from "./Pages2/Products"


const App=()=>{




  return(


    <div>

      {/* pages */}


      {/* <Navbar />
        <Routes>

          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="*" element={<Error />}/>

          
        </Routes> */}



        {/* pages2 */}
        <Routes>

        <Route path="/products" element={<Products />}/>
          <Route path="/products/samsung" element={<Samsung />}/>
          <Route path="/products/oppo" element={<Oppo />}/>
          <Route path="/products/apple" element={<Apple />}/>
        </Routes>
        {/* <Samsung />
        <Apple /> */}
    </div>
  )
}

export default App;