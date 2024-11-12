import Ad1 from '../assets/img/ad1.png'
import Ad2 from '../assets/img/ad2.png'
import Ad3 from '../assets/img/ad3.png'
import Ad4 from '../assets/img/ad4.png'
import Ad6 from '../assets/img/ad6.png'
import Ad7 from '../assets/img/ad7.png'

import React from 'react'
import CardItem from './CardItem'

export default function Commercials() {
  return (
    <div className="py-16 px-14 bg-base-200">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <CardItem Img={Ad1}/>
        <CardItem Img={Ad2}/>
        <CardItem Img={Ad3}/>
        <CardItem Img={Ad4}/>
        <CardItem Img={Ad6}/>
        <CardItem Img={Ad7}/>

        
    </div>
    </div>
  )
}
