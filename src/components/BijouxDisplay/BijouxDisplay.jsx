import React, { useContext } from 'react'
import './BijouxDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import BijouxItem from '../BijouxItem/BijouxItem'

const BijouxDisplay = ({category}) => {

    const {bijoux_list} = useContext(StoreContext)

  return (
    <div className='bijoux-display' id='bijoux-display'>
      <h2>Les bijoux de vos rêves </h2>
      <div className="bijoux-display-list">
        {bijoux_list.map((item,index) => {
          console.log(category, item.category)
          if(category==="All" || category===item.category ){
            return <BijouxItem key={index} id={item._id} nom={item.nom} description={item.description} prix={item.prix} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default BijouxDisplay
