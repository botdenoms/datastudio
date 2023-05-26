import React from 'react'

export default function TemplateCard({cardData={}, clickCallback=()=> alert("No action passed")}) {

    const cardClicked = ()=>{
        // trigger clickCallback
        clickCallback()
    }

    return (
        <div className='temp-card' onClick={()=> cardClicked()}>
            <div className="summary">
                <span>
                    {!cardData.name && "Template Name"}
                    {cardData.name}
                </span>
                <span>
                    {!cardData.category && "Template category"}
                    {cardData.category}
                </span>
            </div>
            {
                !cardData.description && 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
                Esse odio accusamus, perspiciatis nemo aliquid aliquam ad, <br/> 
                totam saepe corporis fugit animi aperiam distinctio.
                </p>
            }
            {
                cardData.description && <p>{cardData.description}</p>
            }
            <div className="summary-more">
                <span>Features: {cardData.features?cardData.features:"0"}</span>
                <span>Count: {cardData.count?cardData.count:"0"}</span>
            </div>
            <div className="preview">
                {/* first 3 rows preview */}
                <div className="row">{cardData.sample1?cardData.sample1:"Row 1"}</div>
                <div className="row">{cardData.sample2?cardData.sample2:"Row 2"}</div>
                <div className="row">{cardData.sample3?cardData.sample3:"Row 3"}</div>
                <span>...</span>
            </div>
        </div>
    )
}
