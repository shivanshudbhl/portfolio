import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const StarsAnimated = () => {
  const starsRef = useRef()
 
  //memoize the properties of star components
  const starProps = useMemo(
    () => ({
      radius: 1,
      depth: 80,
      count: 5000,
      factor: 5,
      saturation: 0,
      fade: true,
      speed: 2,
    }),
    []
  )
  
  //rotations in x,y,z axis
  useFrame(() => {
    starsRef.current.rotation.y += 0.0001
    starsRef.current.rotation.x += 0.0001
    starsRef.current.rotation.z += 0.0001
  })

  return <Stars ref={starsRef} {...starProps} />
}

export default StarsAnimated
