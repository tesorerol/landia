/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/yaguarete.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="Geometry">
          <skinnedMesh name="Lengua" geometry={nodes.Lengua.geometry} material={materials.aiStandardSurface5} skeleton={nodes.Lengua.skeleton} />
          <group name="Yaguarete">
            <skinnedMesh name="Yaguarete_1" geometry={nodes.Yaguarete_1.geometry} material={materials.aiStandardSurface1} skeleton={nodes.Yaguarete_1.skeleton} />
            <skinnedMesh name="Yaguarete_2" geometry={nodes.Yaguarete_2.geometry} material={materials.aiStandardSurface6} skeleton={nodes.Yaguarete_2.skeleton} />
            <skinnedMesh name="Yaguarete_3" geometry={nodes.Yaguarete_3.geometry} material={materials.aiStandardSurface2} skeleton={nodes.Yaguarete_3.skeleton} />
            <skinnedMesh name="Yaguarete_4" geometry={nodes.Yaguarete_4.geometry} material={materials.aiStandardSurface3} skeleton={nodes.Yaguarete_4.skeleton} />
            <skinnedMesh name="Yaguarete_5" geometry={nodes.Yaguarete_5.geometry} material={materials.aiStandardSurface4} skeleton={nodes.Yaguarete_5.skeleton} />
          </group>
        </group>
        <primitive object={nodes.group1} />
      </group>
    </group>
  )
}

useGLTF.preload('/yaguarete.glb')
