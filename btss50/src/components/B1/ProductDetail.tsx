import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const url = useParams();
    console.log(url.id);
    
  return (
    <>
        <p>{url.id}</p>
    </>
  )
}
