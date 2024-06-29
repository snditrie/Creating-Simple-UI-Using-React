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
                        <h2 className="text-center fw-bold pb-4">About Us</h2>
                        <p className="text-center">
                            <b>Pawtopia</b>, your trusted partner in pet adoption! Our mission is to connect loving families with adorable pets in need of a home. 
                            Whether you're looking for a playful puppy, a cuddly kitten, a chirpy bird, or any other pet, we are here to help you find the perfect companion.
                        </p>
                        <p className="text-center">
                            At <b>Pawtopia</b>, we believe that every pet deserves a loving home. That's why we work tirelessly to ensure that each adoption is a successful and joyful experience for both the pet and the owner. Our team of dedicated professionals is passionate about animal welfare and committed to providing the best care for our animals.
                        </p>
                        <p className="text-center">
                            We offer a wide range of services to support you throughout the adoption process, including pre-adoption counseling, pet care education, and post-adoption support. Our facilities are equipped with everything needed to keep our pets healthy and happy while they wait for their forever homes.
                        </p>
                        <p className="text-center">
                            Join our community of pet lovers and make a difference in the lives of animals. Adopt, don’t shop – give a pet a second chance at a happy life!
                        </p>
                    </div>
                </section>
        )
    }
}

export default AboutUs;
