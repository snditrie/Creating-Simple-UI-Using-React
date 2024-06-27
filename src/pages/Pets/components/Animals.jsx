import { IconHeart, IconShoppingCart } from '@tabler/icons-react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { IconHeartFilled } from '@tabler/icons-react'

class Animals extends Component {
  state = {
    isSaved: false,
  }

  handleChangeSaved = () => {
    this.setState({
      isSaved: !this.state.isSaved
    }, () => {
      this.props.changeSavedCount(this.state.isSaved === true ? 1 : -1)
    })
  }

  render() {
    const { image, name, category, description}= this.props


    return (
      <div className="card shadow-sm" style={{width: '18rem', height: '35rem'}}>
        
           <img
          src={image}
          alt={name}
          alt1={category}
          alt2={description}
          className="card-img-top" style={{height:'60%', objectFit: "cover"}} />

        <div className="card-body text-bg-info">
          <h2 className="card-title">{name}</h2>
          {/* <h5 className="card-title fw-light">{category}</h5> */}
          <h6 className="card-title fw-light">{description}</h6>
        </div>

        <div className="d-flex text-bg-info justify-content-md-end">
          <button onClick={this.handleChangeSaved}
            className="btn btn-lg btn-link"
          >
            <i>
              {this.state.isSaved ? <IconHeartFilled /> : <IconHeart />}
            </i>
          </button>
        </div>
        
      </div>
    )
  }
}

export default Animals

Animals.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  changeSavedCount: PropTypes.func.isRequired,
}