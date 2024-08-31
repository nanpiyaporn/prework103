import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import AddCreator from "./pages/AddCreator"
import EditCreator from "./pages/EditCreator"
import ShowCreator from "./pages/ShowCreator"
import ViewCreator from "./pages/ViewCreator" 
import Home from "./pages/Home"

function App() {
 
  return (
    
  <BrowserRouter>

    <nav>
      <h1> CREATORVERSE </h1>
    <Link to = "/"> VIEW ALL CREATOR </Link>
    <Link to = "/AddCreator"> ADD A CREATOR </Link>

    </nav>
    <br />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/AddCreator" exact element={<AddCreator />} />
      <Route path="/EditCreator/:id" exact element={<EditCreator />} />
      <Route path="/ShowCreator/:id" exact element={<ShowCreator />} />
      <Route path="/ViewCreator/:id" exact element={<ViewCreator />} />
    </Routes>
  </BrowserRouter>
       
      
     
      
   
  )
}

export default App
