import './App.css';
import Auth from './homepage/Auth';
import Footer from './homepage/Footer';
import Header from './homepage/Header';
import MainContainer from './homepage/MainContainer';

function App() {
  return (
    <div className="App">
      <Auth/>
      <Header/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;
