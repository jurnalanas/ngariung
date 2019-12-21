import React from 'react'
import Table from './Table'
import CardsMedium from './CardsMedium'
import CardsLarge from './CardsLarge'

const Contents = () => {
  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2">
      <CardsLarge/>
      <CardsLarge/>
      <CardsMedium/>
      <CardsMedium/>
      <CardsMedium/>
      <Table/>
    </div>
  )
}

export default Contents;
