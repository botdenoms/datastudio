import {useState} from 'react'
import TopActions from './TopActions'

export default function ColGenerator({title='', add=false, reset=false, clear=false}) {

    const [colName, setColName] = useState('')
    const [colType, setColType] = useState(1)

    const addAction = ()=>{
        if (colName === '') {
            alert("Empty Column name not allowed")
            return
        }
        if (!add) {
            alert("No action added")
            return
        }
        add({colName, colType})
        setColName('')
        setColType(1)
    }

    return (
        <div className='col-gen'>
            {/* Actions, Clear, delete and title display */}
            <TopActions title={title} clear={clear} reset={reset}/>
            <div>
                <input value={colName} type="text" placeholder='Col Name' onChange={(e)=> setColName(e.target.value)}/>
                <select className='data-type' value={colType} onChange={(e)=> setColType(e.target.value)}>
                    <option value={1}>Null</option>
                    <option value={2}>Number</option>
                    <option value={3}>Currency</option>
                    <option value={4}>Double</option>
                    <option value={5}>Text</option>
                </select>
            </div>
            <button onClick={()=>addAction()}>Add</button>
        </div>
    )
}
