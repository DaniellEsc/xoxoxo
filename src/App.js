
import './App.css';
import TicTac from './components/TicTac';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-blue-400 via-blue-400 to-blue-500">
      <h2 className='text-5xl font-bold pt-12'>
        XOXOXO
      </h2>
      <TicTac/>
    </div>
  );
}

export default App;
