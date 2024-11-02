import { BrowserRouter, Route, Routes } from "react-router-dom"
import FacebookPage from "./FacebookPage"
import FacebookRegestrationPage from "./FacebookRegestrationPage"


const AllComponents = () =>{
    return(
      
        <>
        <BrowserRouter>
        
        <Routes>

        <Route path="/" element= {<FacebookPage/>}></Route>
        <Route path="/FacebookRegestrationPage" element= { <FacebookRegestrationPage/>}></Route>

        </Routes>
        </BrowserRouter>
        </>
    )
}

export default AllComponents