import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [flowers, setFlowers] = useState (data);
    
  const removeFlower = (id) => {
        let newFlower = flowers.filter((flower) => flower.id !== id);
        setFlowers(newFlower)
  }
  
    return (
      <div>
  
      <div className="container">
       <h1>CREATE YOUR OWN BOUQUET!</h1>
       </div>

       <div className="container">
       <h2>Just remove the flowers you don't want to receive.</h2>
      </div>
  
      {flowers.map((flower => {
        const { id, item, description, image } = flower;
        return (
          <div key={id}>
  
          <div className="container">
            <h2>{id} - {item}</h2>
            </div>
  
            <div className="container">
            <p>{description}</p>
            </div>
  
            <div className="container">
            <img src={image} alt='pretty flower' width='400px'/>
            </div>
  
            <div className="container">
            <button className="btn" onClick={() => removeFlower(id)}>Remove</button>
            </div>
  
            </div>
        )
      }))}

<div className='container'>
  <button className="btn" onClick={() => setFlowers([])}>Delete all</button>
</div>


      </div>
    );
  }
  

export default App;
