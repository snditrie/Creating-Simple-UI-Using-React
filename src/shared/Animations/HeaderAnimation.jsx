import animation from '../../assets/animations/Animation-header.json'
import Lottie from "lottie-react"

const HeaderAnimation = () => {
  return (
    <div className='animated-element'>
        <Lottie animationData={animation} style={{ width: 200 }}/>
    </div>
  )
}

export default HeaderAnimation
