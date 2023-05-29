import React from 'react'

export default function TopActions({title='', reset=false, clear=false}) {
    const clearBuild = ()=>{
        if (!clear) {
            alert("No function added")
        }
        clear()
    }
    const deleteBuild = ()=>{
        if (!reset) {
            alert("No function added")
        }
        reset()
    }
    return (
        <div className='action-bar'>
            <span>
                {title === '' && "No title"}
                {title !== '' && title}
            </span>
            <div>
                <div className="action clear" onClick={()=>clearBuild()}>Clear</div>
                <div className="action del" onClick={()=>deleteBuild()}>Delete</div>
            </div>
        </div>
    )
}
