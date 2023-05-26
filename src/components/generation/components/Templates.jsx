import React from 'react'
import TemplateCard from './TemplateCard'

export default function Templates({templates=[]}) {
    return (
        <div className='templates'>
            <h4>Templates</h4>
            <div className="items-list">
                {/* Template Cards */}
                {
                    templates.length === 0 && <span className='notice'>No templates Present</span>
                }
                {
                    templates.length > 0 && templates.map((v, i)=> <TemplateCard key={i} cardData={v} />)
                }
            </div>
        </div>
    )
}
