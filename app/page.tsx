import Image from 'next/image'
import Slider from './Components/Slider'
import Featured from './Components/Featured'

export default function Home() {
  return (
    <div>
      <Slider />
      <Featured />
    </div>
  )
}
