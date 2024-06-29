import animation from '../../assets/animations/Animation-loading.json'
import Lottie from "lottie-react"

const LoadingAnimation = () => {
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <span style={{ width: 100 }}>
        <Lottie animationData={animation} style={{ width: 200 }}/>
      </span>
    </div>
  )
}

export default LoadingAnimation
