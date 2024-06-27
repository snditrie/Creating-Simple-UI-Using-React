import { Component } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Sidebar from "../../shared/Sidebar/Sidebar";
import Testimony from "./components/Testimony";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


class Home extends Component {
    render() { 
        // const {image} = this.props
        return (
            <div>
                <div className='container-fluid pt-4 px-4 position-relative'>
                <Navbar />
                {/* <Hero />                       */}
                <AboutUs />
                <Testimony />
                <ContactUs />
                
                {/* <h1>Home</h1> */}
                </div>
                <Footer />
            </div>
            

        )
    }
}
 
export default Home