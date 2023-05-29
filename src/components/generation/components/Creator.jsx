import {useState} from 'react'

export default function Creator({verbose= false, callBack=false}) {
    const [more, setMore] = useState(verbose)
    const [name, SetName] = useState('')
    const [description, SetDescription] = useState('')
    const [category, SetCategory] = useState(0)

    const handleClick = ()=>{
        if (name === '') {
            alert('At least a name is required')
            return
        }
        if (callBack === false){
            alert("No callBack added")
            return
        }
        callBack({name, description, category})
    }

    const verboseView = ()=>{
        setMore(!more)
    }
    return (
        <div className='creator'>
            <div>
                <input type="text" placeholder='Name' required onChange={(e)=> SetName(e.target.value)}/>
                {!more && <button onClick={()=>handleClick()}>create</button>}
            </div>
            {
                more && 
                <textarea placeholder='Description...' cols="30" rows="10" onChange={(e)=> SetDescription(e.target.value)}></textarea>
            }
            {
                more &&
                <div>
                    <select onChange={(e)=> SetCategory(e.target.value)} value={category}>
                        <option value={0}>None</option>
                        <option value={1}>Bussiness</option>
                        <option value={2}>Research</option>
                        <option value={3}>Report</option>
                    </select>
                </div>
            }
            {
                more &&
                <div className='submit-div'>
                    <button onClick={()=>handleClick()}>create</button>
                </div>
            }
            <div onClick={()=> verboseView()} className='verbose'>
                {more? "less": "More"}
            </div>
        </div>
    )
}