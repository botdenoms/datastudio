import './App.css'
import Appbar from './components/Appbar'
import Generation from './components/generation/Generation'

function App() {
  return (
    <div className="App">
      {/* always present */}
      <Appbar/>
      {/* contents sections */}
      <Generation />
    </div>
  );
}

export default App;
