
import './App.css';
import Header from './Header'
import Card from './Card'
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    <div className="App">
      {/* {header} */}
      <Header />
      {/* {card} */}
      <Card />
      {/* {swipe button} */}
      <SwipeButtons />
    </div>

  );
}

export default App;
