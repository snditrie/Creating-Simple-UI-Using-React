import { IconHeart, IconShoppingCart } from '@tabler/icons-react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { IconHeartFilled } from '@tabler/icons-react'



class Animals extends Component {
  // cara panggil props gimana?
  // constructor(props) {
  //   super(props)
  //   // this.state = {
  //   //   count: 11,
  //   // }

  //   // this.handleDecrement = this.handleDecrement.bind(this)
  //   // this.handleIncrement = this.handleIncrement.bind(this)
  // }

  state = {
    count: 0,
    isSaved: false,
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
    // console.log("🚀 ~ ItemProduct ~ handleIncrement ~ this:", this)
  }

  handleDecrement = () => {
    if (this.state.count === 0) return
    this.setState({
      count: this.state.count - 1
    })
    // console.log("🚀 ~ ItemProduct ~ handleDecrement ~ this:", this)
  }
  handleChangeSaved = () => {
    this.setState({
      isSaved: !this.state.isSaved
    }, () => {
      this.props.changeSavedCount(this.state.isSaved === true ? 1 : -1)
    })
  }

  // React Lifecycle
  constructor(props) {
    super(props)
    console.log("Called from constructor")
  }
  // ini sering digunakan pada saat fetch data menggunakan API
  componentDidMount() {
    console.log("Called from componentDidMount")
  }

  // ini ketika ada perubahan state
  componentDidUpdate() {
    console.log("Called from componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("Called from componentWillUnmount")
  }

  render() {
    console.log("Called from render")
    const { image, name, category, description}= this.props
    // console.log("🚀 ~ ItemProduct ~ render ~ this:", this)
    // console.log("🚀 ~ ItemProduct ~ render ~ handleDecrement:", this.handleDecrement)


    return (
      <div className={"card shadow-sm m-auto"}style={{ height: "100%", width:"70%" }} >
        
           <img
          src={image}
          alt={name}
          alt1={category}
          alt2={description}
          className="card-img-top w-50 h-10 object-fit-contain m-auto" />

        <div className="card-body">
          <h4 className="card-title fw-light">{name}</h4>
          <h5 className="card-title fw-light">{category}</h5>
          <h5 className="card-title fw-light">{description}</h5>
        </div>
        
        <div className="d-flex justify-content-between p-2">
          
          <button onClick={this.handleChangeSaved}
            className="btn btn-link"
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