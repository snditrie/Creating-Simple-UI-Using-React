import { Component } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";

class Home extends Component {
    render() { 
        return (
            <div>
                <Navbar />
                <AboutUs />
                {/* <Testimonial />
                <ContactUs />
                <Footer /> */}
                {/* <h1>Home</h1> */}
            </div>
            

        )
    }
}
 
export default Home;