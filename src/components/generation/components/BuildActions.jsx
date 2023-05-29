import {useState} from 'react'

export default function BuildActions({cols=[]}) {
    const [rows, setRows] = useState(10)
    const runBuild = ()=>{
        alert(`Generate ${rows} rows the Columns added`)
    }
    return (
        <div>
            <div>
                No of rows : <input type="number" value={rows} onChange={(e)=>setRows(e.target.value)}/>
            </div>
            <button className='build-btn' onClick={()=> runBuild()}>Build</button>
        </div>
    )
}
