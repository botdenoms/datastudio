import React from 'react'

export default function DataTable({cols=[], rows=[[]]}) {
    return (
        <div>
            <div className='tb-header'>
                {
                    cols.map((v, i)=>{
                        return (
                            <div className="col-data" key={i}>
                                <span>{v.colName}</span>
                            </div>
                        )
                    })
                }
            </div>
            {/* rows list of list(len=cols)*/}
            {
                rows.map((v, i)=>{
                    return (
                        <div className='tb-row' key={i}>
                            {
                                v.map((c, i2)=>{
                                    return (
                                        <div className="col-data" key={i2}>
                                            <span>{c}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            <div className='exports'>
                <button>csv</button>
                <button>tsv</button>
                <button>pandas</button>
                <button>xml</button>
                <button>docs</button>
            </div>
        </div>
    )
}
