import AboutUs from "./AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import ServiceAndPricing from "./ServiceAndPricing";
import ContactUs from "./ContactUs";
import Book from "./Book";
import Home from "./Home";;

const Main = () => {

    return (
        <>

        {/* Dynamically Render Pages with Routers */}
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="contactus" element={<ContactUs />} />
                    <Route path="pricing" element={<ServiceAndPricing />} />
                    <Route path="book" element={<Book />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
        </>
    )

}   

export default Main;