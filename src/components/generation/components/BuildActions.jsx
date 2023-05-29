import {useState} from 'react'

export default function BuildActions({cols=[], setData=false, feedBack=false}) {
    const [rows, setRows] = useState(10)
    const runBuild = ()=>{
        if (!setRows || !feedBack) {
            alert("provide a set function for feedback and rows")
            return
        }
        alert(`Generate ${rows} rows the Columns added`)
        // loop for no of rows to generate
        var lst = []
        for (let index = 0; index < rows; index++) {
            var rws = []
            // for each col item generate data
            cols.forEach(element => {
                //  check type of data
                const gen = dataCreate(element.colType)
                rws.push(gen)
            });
            lst.push(rws)
        }
        setData([...lst])
        feedBack(true)
    }

    const dataCreate = (typeData)=>{
        switch (Number(typeData)) {
            case 1:
                return 'Null'
            case 2:
                return Math.random(100)
            case 3:
                return `${Math.random(10)}.${Math.random(2)}`
            case 4:
                return `${Math.random(5)}.${Math.random(4)}`
            case 5:
                return 'Text Text'
            case 6:
                return 'Email@mail.com'
            default:
                return 'UnKnown Type'
        }
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
