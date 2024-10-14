import React, { useState } from 'react'
import './BijouxItem.css'
import { assets } from '../../assets/assets'
const BijouxItem = ({id, nom, prix, description, image}) => {

    const [itemCount, setItemCount ] = useState(0)

  return (
    <div className='bijoux-item'>
        <div className="bijoux-item-img-container">
            <img src={image} alt="" className="bijoux-item-image" />
            {!itemCount
                ?<img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} className='add' />
                :<div className='bijoux-item-counter'>
                    <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                    <p>{itemCount}</p>
                    <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="bijoux-item-info">
            <div className="bijoux-item-name-ratting">
                <p>{nom}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="bijoux-item-description">
                {description}
            </p>
            <p className="bijoux-item-prix">
                {prix} Ariary
            </p>
        </div>
    </div>
  )
}

export default BijouxItem
