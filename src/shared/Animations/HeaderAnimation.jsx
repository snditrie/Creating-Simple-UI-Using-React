import animation from '../../assets/animations/Animation-header.json'
import Lottie from "lottie-react"

const HeaderAnimation = () => {
  return (
    <div className='d-flex justify-content-center my-5'>
      <span style={{ width: 200 }}>
        <Lottie animationData={animation} />
      </span>
    </div>
  )
}

export default HeaderAnimation
