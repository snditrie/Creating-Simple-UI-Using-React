import { Component } from "react";

class AboutUs extends Component {
    render() {
        return (
            <section
                    className="bg-secondary py-4 d-flex align-items-center"
                    style={{ minHeight: "40dvh" }}    
                    id="about-us"
                >
                    <div className="container">
                        <h2 className="text-center fw-bold">About Us</h2>
                        <p className="text-center">
                            Chiky's Shop is a ...
                        </p>
                    </div>
                </section>
        )
    }
}

export default AboutUs;
