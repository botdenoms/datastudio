import React from 'react'
import Builder from './components/Builder'
import Templates from './components/Templates'
import './Styles.css'

export default function Generation() {
    return (
        <div className='gen-comp'>
            {/* Templates */}
            <Templates templates={[]}/>
            {/* Builder */}
            <Builder />
        </div>
    )
}
