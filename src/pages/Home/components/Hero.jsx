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
                            <h2 className="display-4">
                                Affordable and Trusted
                            </h2>
                            <h4 className="my-4">
                                #1 market for adopt pets, items, and grooming with affordable prices
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
