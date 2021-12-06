import React from 'react'
import Heroimg from '../heroImage/heroImage'
import YouTube from '../Youtube API/YouTube'
import Testimonial from '../Testimonials/Testimonial'
import CardContainer from '../card/card.containter'
import Developers from '../developers/developers'

export default function Homepage() {
    let storageProducts = JSON.parse(localStorage.getItem('products'))
    return (
        <div className="container1"  >
            <Heroimg />
            <div>{localStorage.getItem('products') ? storageProducts.filter((element, index) => index < 3).map(data => <CardContainer value={data} />) : <h1>There are no products at the moment</h1>}</div>
            <YouTube />
            <Testimonial />
            <Developers />

        </div>
    )
}