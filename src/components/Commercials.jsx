
import {DATA} from '../assets/data/data'
import React from 'react'
import CardItem from './CardItem'

export default function Commercials() {
  return (
    <div className="py-16 px-14 bg-base-200">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {
          DATA.map((data)=>(
            <CardItem
            key={data.id}
            id={data.id}
            Img={data.Img}
             />
          ))
        }
    </div>
    </div>
  )
}
