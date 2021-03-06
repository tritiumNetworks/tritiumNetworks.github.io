import React, { useRef, useState } from 'react'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import './App.css'
import { random } from './utils'

function Box (props: any) {
  const mesh = useRef<MeshProps>()

  const [isHover, setIsHover] = useState(false)

  useFrame(() => {
    if (!mesh.current) return

    mesh.current.rotation.x += random(-1, 1) / 7
    mesh.current.rotation.y += random(-1, 1) / 7
    mesh.current.rotation.z += random(-1, 1) / 7

    mesh.current.position.x += random(-1, 1) / 50
    mesh.current.position.y += random(-1, 1) / 50

    if (window.scrollY) {
      mesh.current.position.y -= 0.02
      mesh.current.scale.x += 0.001
      mesh.current.scale.y += 0.001
      mesh.current.scale.z += 0.001
    }
  })

  function pointerMove (event: MouseEvent) {
    if (!isHover) return
    if (!mesh.current) return
    if (typeof window === 'undefined') return

    mesh.current.position.x = event.clientX / 1000
    mesh.current.position.y = event.clientY / 1000
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={() => alert('Thank u :)')}
      onPointerMove={pointerMove}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
      scale={0.1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHover ? 'red' : '#6bedd4'} />
    </mesh>
  )
}

function App () {
  return (
    <div>
      <div className="three-canvas">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
          <Box position={[random(-5, 5), random(-5, 5), 0]} />
        </Canvas>
      </div>
      <div className="introduce">
        <p>
          Tritium Networks<br />
          (2016~2021)<br />
          <small>???????????? ?????? ????????? ?????? ??????</small>
        </p>
      </div>
      <div className="says">
        <big>???????????????.</big><br />
        2016????????? ????????? ??????????????? ????????? ????????? ??????????????????. <br />
        ????????? ??????????????? 2016??? &quot;PMH Studio&quot;?????? ???????????? ????????? ??????????????? ???????????????. <br />
        <br />
        ????????? PMH Studio??? ?????????????????? ????????? ???????????????. <br />
        Vocaloid??? ????????? ?????? ????????? ???????????? ????????? ?????? ??? ???????????? ????????? ????????? ???????????? ?????????????????????. <br />
        ????????? ????????? ???????????? ???????????? ??? ???????????? ?????? ????????? ?????? ?????????, ?????? ?????? ?????? ?????? ????????? ??????????????? ?????????????????????. <br />
        <br />
        ?????? ??????????????? ???????????? ??? ???????????? ?????????, ??????????????? ????????? ?????? ??? ????????? ????????? ??? ??????????????? ??????????????????. <br />
        ????????? ????????? ??????????????? ???????????? ??????????????? ???????????? ?????? ????????? ???????????????. <br />
        ??? ?????????????????? ???????????? ?????? ?????? ??? ???????????? ???????????????.<br />
        <br />
        ?????? ?????? ?????? ????????? ?????? ???????????? ???????????? ?????????????????????. <br />
        Discord ???????????? ?????? ?????? ???????????? ????????? ?????????????????????. <br />
        ?????? ???????????? ???????????? ?????? ????????? ???????????? ???????????????, ????????? ????????? ???????????? ??? ??? ?????? ?????? ???????????? ?????????????????????. <br />
        2018??? ?????? ???????????? &quot;??????&quot;??? ???????????? ?????? ??????????????? ????????? ?????? ????????? ????????? ?????????????????????. <br />
        <br />
        ?????? ????????? &quot;????????? ?????? ??? ????????? ?????? ??????&quot; ????????? ????????? ?????? ???????????? ???????????????, ???????????? ??? ??? ??? ??? ??????????????? ???????????????. <br />
        ???????????????. <b>- Dev. PMH</b><br />
        <br />
        <br />
        <i>LofiGirl??? ?????????????????? ?????? ?????????????????? <a style={{ color: 'white' }} href="https://pmh.codes">??????</a>?????? ?????? ???????????????.</i>
      </div>
    </div>
  )
}

export default App
