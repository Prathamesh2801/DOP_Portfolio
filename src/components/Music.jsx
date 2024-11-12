import Music1 from '../assets/img/music1.jpg'
import Music2 from '../assets/img/music2.jpg'
import Music3 from '../assets/img/music3.jpg'
import Music4 from '../assets/img/music4.jpg'

import React from 'react'
import CardItem from './CardItem'

export default function Music() {
  return (
    <div className="py-16 px-14 bg-base-200">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <CardItem Img={Music1}/>
        <CardItem Img={Music2}/>
        <CardItem Img={Music3}/>
        <CardItem Img={Music4}/>
        
    </div>
    </div>
  )
}
