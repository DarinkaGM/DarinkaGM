import './App.css';
// import './modal.css';
import ProfileCard from './containers/ProfileCard';
import MainContainer from './containers/mainContainer';
import Portfolio from './containers/Portfolio';

function App() {
  return (
    <div className="App">
      <ProfileCard/>
      <MainContainer/>
      <Portfolio/>
    </div>
  );
}

export default App;