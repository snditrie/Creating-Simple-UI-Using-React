import { Component } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Testimony from "./components/Testimony";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


class Home extends Component {
    render() { 
        return (
            <div>
                <div className='container-fluid pt-4 px-4 pb-4 position-relative'>
                <Navbar />
                <AboutUs />
                <Testimony />
                <ContactUs />
                </div>
                <Footer />
            </div>
            

        )
    }
}
 
export default Home