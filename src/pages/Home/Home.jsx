import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import BijouxDisplay from '../../components/BijouxDisplay/BijouxDisplay'



const Home = () => {

    const [category, setCategory] = useState("All");


  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <BijouxDisplay category={category}/>
    </div>
  )
}

export default Home
