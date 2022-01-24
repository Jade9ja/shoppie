import React from 'react'
import CategoriesCard from './CategoriesCard'
import { categoryItems } from '../data.js'
import './categories.css'

function Categories() {
    return (
        <div className='categories-container'>
            {categoryItems.map((item)=> (
                <CategoriesCard item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Categories
