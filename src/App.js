import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";


const App = (props) => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}


export default App;
