import {useState} from 'react'
import './App.css'
import Appbar from './components/Appbar'
import Generation from './components/generation/Generation'
import Cleaning from './components/cleanor/Cleaning'
import Transformer from './components/transformer/Transformer'
import Visualization from './components/visualizer/Visualization'
import Modelling from './components/modelling/Modelling'
import Migration from './components/migration/Migration'
import Storage from './components/storage/Storage'

function App() {
  const tabs = [
    'Generation', 
    'Cleaning',
    'Transformation',
    'Visualization',
    'Modelling',
    'Migration',
    'Storage',
  ]
  const [tab, setTab] = useState(0)

  const tabHandler= (index) =>{
    setTab(index)
  }

  return (
    <div className="App">
      {/* always present */}
      <Appbar tabs={tabs} navigator={tabHandler} active={tab}/>
      {/* contents sections */}
      { tab === 0 && <Generation />}
      { tab === 1 && <Cleaning />}
      { tab === 2 && <Transformer />}
      { tab === 3 && <Visualization />}
      { tab === 4 && <Modelling />}
      { tab === 5 && <Migration />}
      { tab === 6 && <Storage />}
    </div>
  );
}

export default App;
