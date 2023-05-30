import React from 'react'

export default function DataTable({title='',cols=[], rows=[[]]}) {
    const downloadTable = (format)=>{
        switch (format) {
            case 0:
                var fileName = '1'
                if (title !== '') {
                    fileName = title
                }
                // Build head titles
                const hd= [] 
                // Extract header titles
                cols.forEach((e)=> hd.push(e.colName))
                // Create data
                const bd = []
                // add title
                bd.push(hd.join(','))
                // add body
                rows.forEach((e)=>{
                    bd.push(e.join(','))
                })
                // add \n (newlines)
                const data = bd.join('\n')
                // build a blob of data
                const dtBlop = new Blob([data], {type: 'text/csv'})
                // create a element
                var lnk = document.createElement('a')
                lnk.download = `${fileName}.csv`
                var url = window.URL.createObjectURL(dtBlop)
                lnk.href = url
                lnk.style.display = 'none'
                document.body.appendChild(lnk)
                lnk.click()
                document.body.removeChild(lnk)
                break;
            default:
                alert("Not implemented")
                break;
        }
    }

    return (
        <div>
            <table>
                {/* header section */}
                <tr>
                    {
                        cols.map((v, i)=>{
                            return (
                                <th key={i}>
                                    {v.colName}
                                    {/* <span>{v.colName}</span> */}
                                </th>
                            )
                        })
                    }
                </tr>
                {/* body section */}
                {
                rows.map((v, i)=>{
                    return (
                        <tr key={i}>
                            {
                                v.map((c, i2)=>{
                                    return (
                                        <td key={i2}>
                                            {c}
                                            {/* <span>{c}</span> */}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        )
                    })
                }
            </table>
            <div className='exports'>
                <button onClick={()=> downloadTable(0)}>csv</button>
                <button onClick={()=> downloadTable(1)}>tsv</button>
                <button onClick={()=> downloadTable(2)}>pandas</button>
                <button onClick={()=> downloadTable(3)}>xml</button>
                <button onClick={()=> downloadTable(4)}>docs</button>
            </div>
        </div>
    )
}
