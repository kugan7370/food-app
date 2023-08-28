import Image from 'next/image'
import Slider from './Components/Slider'
import Featured from './Components/Featured'
import Offers from './Components/Offer'

export default function Home() {
  return (
    <div>
      <Slider />
      <Featured />
      <Offers />
    </div>
  )
}
