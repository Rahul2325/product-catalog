import React from 'react'
import { Card } from 'react-bootstrap'
// import '../styles/Cataloge.css'

function Product({product}) {

  return (
    <div>
    
    <Card className='my-3' style={{width:"18rem"}}>
        <Card.Img src={product.image}/>

        <Card.Body>
            <Card.Title as="div" className='productText semi-bold'> <strong>{product.Name}</strong> </Card.Title>
            <div >
            <strong>{product.Price}</strong> Rs
            </div>

            <Card.Text>
                <strong>Discount</strong>: <span>{product.Discount}%</span><br/>
                <strong>Delivery</strong>: <span>{product.Delivery}</span><br/>
                <strong>Shipping</strong>: <span>{product.Shipping}</span><br/>
            </Card.Text>

            
        </Card.Body>
        
        
       
        

    </Card>
    </div>
  )
}

export default Product