import dum from '../assets/img/dummy.png'

import React from 'react'
import CardItem from './CardItem'

export default function WebSeries() {
  return (
    <div className="py-16 px-14 bg-base-200">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <CardItem Img={dum}/>
        <CardItem Img={dum}/>
        <CardItem Img={dum}/>
        <CardItem Img={dum}/>
        <CardItem Img={dum}/>
        <CardItem Img={dum}/>
    </div>
    </div>
  )
}
