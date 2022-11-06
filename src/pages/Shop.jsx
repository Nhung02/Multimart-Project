import React, { useState } from 'react'
import Button from '../Components/Button/Button'

const Shop = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('crease');
  const [title1, setTitle1] = useState('decrease');
  const creaseCount = () => {
    setCount(count + 1);

  }

  const decreaseCount = () => {
    setCount(count - 1);

  }

  return (
    <>
    <div style={{marginTop: "100px"}}>Shop</div>
    <Button title={title} color={'red'} text={"acn"} number={123} action={creaseCount} ></Button>
    <Button title={title1} color={'green'} text={"acn"} number={123} action={decreaseCount} ></Button>
    <div>
      <p>{count}</p>
    </div>
    </>
  )
}

export default Shop