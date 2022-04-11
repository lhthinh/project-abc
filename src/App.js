import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <Header></Header>
      <div className="page-container"></div>
      <div className="content-wrap"></div>
     
     <Footer></Footer>
    </div>
  );
}

export default App;
