import {useState} from 'react'

import '../styles/Appbar.css'

import logo from '../logo.svg'

export default function Appbar({tabs=[], navigator=false, active=0}) {

    const [user, setUser] = useState(null)
    const [more, setMore] = useState(false)
    const [options, setOptions] = useState(false)

    const accounts = ()=>{
        if (user === null) {
            setMore(true)
            setUser(true)
        }else{
            setMore(false)
            setOptions(true)
        }
    }

    const actionMore = (action)=>{
        // open action modal or dialog or page
        setMore(false)
    }

    const actionOptions = (action)=>{
        // open action modal or dialog or page
        setOptions(false)
    }

    const navigation = (index)=>{
        // handle content tab switch
        if (navigator === false){
            alert('Navigation need to be implemented')
            return
        }
        navigator(index)
    }

    return (
        <div className='appbar'>
            <div className="topbar">
                <div className="brand">
                    <img src={logo} className="logo" alt="logo" />
                    <span>DataStudio</span>
                </div>
                <div className="accounts" >
                    <span onClick={()=> accounts()}>Accounts</span>
                    <img src={logo} className="logo" alt="logo" onClick={()=> accounts()}/>
                    {
                        more &&
                        <div className="more" >
                            <span onClick={()=> actionMore(0)}>Sign In</span>
                            <span onClick={()=> actionMore(1)}>Sign up</span>
                        </div>
                    }
                    {
                        options &&
                        <div className="options">
                            <span onClick={()=> actionOptions(0)}>Profile</span>
                            <span onClick={()=> actionOptions(1)}>Billing</span>
                            <span onClick={()=> actionOptions(2)}>Log Out</span>
                        </div>
                    }
                </div>
            </div>
            <div className="navbar">
                {
                    tabs.map((v, i) => {
                        var clsName = ''
                        if (i === active) {
                            clsName = 'active'
                        }
                        return (<span key={i} className={clsName} onClick={()=>navigation(i)}>{v}</span>)
                    })
                }
            </div>
        </div>
    )
}
