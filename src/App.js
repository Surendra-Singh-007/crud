// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./Home";
// import Create from "./Create";
// import Update from "./Update"
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/create" element={<Create />} />
//           <Route path="/edit/:id" element={<Update />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



















import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home"
import Create from "./Create"
import Update from "./Update"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<Create />} />
    <Route path="/edit/:id" element={<Update />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App