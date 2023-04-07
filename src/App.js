import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import { useEffect, useState } from 'react';

function App() {
  const [search, setSearch] = useState(null)
  return (
    <div>
      <div className='header'>
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />  
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
      </div>
      <Search search={search} setSearch={setSearch} />
      <Results search={search} />
    </div>
  );
}

export default App;
