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
                    <option value={6}>UUID</option>
                    <option value={7}>Boolean</option>
                    <option value={8}>Time</option>
                    <option value={9}>Date</option>
                    <option value={10}>DateTime</option>
                    <option value={11}>GeoLocation</option>
                    <option value={12}>Email</option>
                    <option value={13}>Phone</option>
                    <option value={14}>Url</option>
                    <option value={15}>Image</option>
                    <option value={16}>Audio</option>
                    <option value={17}>Video</option>
                    <option value={18}>File</option>
                </select>
            </div>
            <button onClick={()=>addAction()}>Add</button>
        </div>
    )
}
