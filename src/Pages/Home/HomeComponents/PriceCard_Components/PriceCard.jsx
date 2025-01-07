import React from 'react'
import Card from './PriceChildComponents/Card';

function PriceCard() {
    const cards = 3;
    
    return (
        <div 
            className="w-full h-full bg-gray-400 rounded-lg lg:p-10 md:p-5 p-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 "
        >
           <Card />
           <Card />
           <Card />
        </div>
    )
}

export default PriceCard;