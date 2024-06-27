import { Component } from "react"
import dogAndCat from "../../assets/images/Adopt a pet-pana.svg"
import wave from "../../assets/images/wave.svg"

class Dashboard extends Component {
    render() {
        return (
            <section className="hero" id="dashboard">
                <div className="wave-img py-0 my-0">
                    <img src={wave} alt="wave"/>
                </div>
                <div className="container mb-0">
                    
                    <div className="row align-items-center py-0 mb-0"
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

export default Dashboard
