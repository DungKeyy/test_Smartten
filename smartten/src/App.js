import Search from './component/Search/Search';
import Favourites from './component/Favourites/Favourites';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [tab, setTab] = useState(true);

  const handleTabSearch = (event) =>{
    setTab(true);
  }

  const handleTabFavourites = (event) =>{
    setTab(false);
  }

  return (
    <div className="App">
      <div className='d-flex mb-4'>
        <div className='btn' onClick={handleTabSearch} style={tab ? ({background:'#dbe1db'}) : ({background:'none'})}>Search</div>
        <div className='btn ' onClick={handleTabFavourites} style={!tab ? ({background:'#dbe1db'}) : ({background:'none'})}>Favourites</div>
      </div>
      {tab ? <Search/> : <Favourites/>}
    </div>
  );
}

export default App;
