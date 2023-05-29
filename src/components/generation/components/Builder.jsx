import {useState} from 'react'
import BuildActions from './BuildActions'
import ColGenerator from './ColGenerator'
import Creator from './Creator'
import DataTable from './DataTable'
import StatsPreview from './StatsPreview'

export default function Builder() {

    const [init, setInit] = useState(false)
    const [buildSuc, setbuildSuc] = useState(false)
    const [title, setTitle] = useState('')
    const [cols, setCols] = useState([])
    const [rows, setRows] = useState([])

    const build = (payload)=>{
        if (!init) {
            const {name} = payload 
            setTitle(name)
            setInit(true)
        }
    }

    const addCol = (col)=>{
        var temp = []
        temp = [...cols]
        temp.push(col)
        setCols([...temp])
    }

    const clearCols = () =>{
        setCols([])
    }

    const resetBuild = () =>{
        setCols([])
        setInit(false)
        setbuildSuc(false)
        setTitle('')
    }

    return (
        <div className='builder'>
            <h4>Builder</h4>
            {/* Creator */}
            {
                !init &&
                <Creator verbose={false} callBack={build}/>
            }
            {/* ColGenerator */}
            {
                init &&
                <ColGenerator title={title} add={addCol} reset={resetBuild} clear={clearCols}/>
            }
            {/* Stats and preview area */}
            {
                init &&
                <StatsPreview cols={cols}/>
            }
            {/* Controls */}
            {
                init && cols.length > 3 && 
                <BuildActions cols={cols}/>
            }
            {/* Data Table from cols as header with rows as data */}
            {
                buildSuc && 
                <DataTable/>
            }
        </div>
    )
}
