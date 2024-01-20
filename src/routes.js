import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/aboutme/Aboutme";
import Error404 from "./pages/error/Error404";
import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import Skills from "./pages/skills/Skills";
import Studies from "./pages/studies/Studies";


function routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutme" element={<About />}></Route>
                <Route path="/jobs" element={<Jobs />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/studies" element={<Studies/>}></Route>
                <Route path="*" element={<Error404/>}></Route>
            </Routes>        
        </BrowserRouter>

    );

}

export default routes;