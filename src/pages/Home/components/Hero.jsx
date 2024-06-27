import { Component } from "react"
import dogAndCat from "../../../assets/images/Adopt a pet-pana.svg"
import wave from "../../../assets/images/wave.svg"

class Hero extends Component {
    render() {
        return (
            <section className="hero" id="hero">
                 <div className="wave-img">
                        <img src={wave} alt="wave"/>
                    </div>
                <div className="container">
                    
                    <div className="row align"
                        style={{ minHeight: "80dvh" }}            
                    > 
                        <div className="col-lg-6 col-12 text-center">
                            <h1 className="display-4">Welcome to <b>Chiky's Pet Paradise</b></h1>
                            <h4 className="my-4">
                                Your trusted partner in pet adoption
                            </h4>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={dogAndCat} alt="dog-and-cat" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;
