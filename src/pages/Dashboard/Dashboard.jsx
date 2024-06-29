import { Component } from "react"
import dogAndCat from "../../assets/images/Adopt a pet-pana.svg"
import { IconArrowBadgeRightFilled } from "@tabler/icons-react"
import Home from "../Home/Home"
import PropTypes from "prop-types"

class Dashboard extends Component {
    render() {
        const { navigateTo } = this.props
        return (
            <section className="hero" id="dashboard">
                <div className="container position-relative">                   
                    <div className="row align-items-center justify-content-center"
                        style={{ minHeight: "80vh" }}            
                    > 
                        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                            <h1 className="display-4">Welcome to <b>PAWTOPIA</b></h1>
                            <h4 className="my-4">
                                Your trusted partner in pet adoption
                            </h4>
                            <button onClick={() => navigateTo(<Home />)}
                                className="btn btn-primary cursor-pointer rounded-3 bg-secondary"
                                
                            >
                                See more
                                <IconArrowBadgeRightFilled />
                            </button>
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
Dashboard.propTypes = {
    navigateTo: PropTypes.func,
  }