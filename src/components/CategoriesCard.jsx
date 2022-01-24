import React from 'react'
import './categories.css'

function CategoriesCard(props) {
    return (
        <div className='category-card'>
            <img src={props.item.img} alt='category'></img>
            <div className="card-info">
                <h1>{props.item.title}</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoriesCard
