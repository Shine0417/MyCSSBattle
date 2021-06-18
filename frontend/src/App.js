import './App.css';
import CSSBattle from './containers/CSSBattle'
import video from './background.mp4';
import BackgroundVideo from './utility/BackgroundVideo';
function App() {


  return (
    <div className="App">
      <BackgroundVideo src={video}/>
      <CSSBattle />
    </div >
  );
}

export default App;
