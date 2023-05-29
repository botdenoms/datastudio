import React from 'react'

export default function StatsPreview({cols=[]}) {
    const typeText = (index)=>{
        switch (Number(index)) {
            case 1:
                return 'Null'
            case 2:
                return 'Number'
            case 3:
                return 'Currency'
            case 4:
                return 'Double'
            case 5:
                return 'Text'
            case 6:
                return 'Email'
            default:
                return 'UnKnown'
        }
    }
    return (
        <div className='stats'>
            <div>
                Columns : <span>{cols.length}</span>
            </div>
            {/* loop through cols */}
            <div className='tb-dt'>
                {
                    cols.map((v, i)=>{
                        return (
                            <div className="col-details" key={i}>
                                <span>{v.colName}</span>
                                <span>{typeText(v.colType)}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
