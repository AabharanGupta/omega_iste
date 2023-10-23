import "./App.css";
import Footer from "./components/Footer";
// import NNavbar from "./components/NNavbar";
import NNNavbar from "./components/NNNavbar";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
// import bg from './assets/images/bg3.png';

function App() {
  return (
    <BrowserRouter>
    <div className='w-[100vw] h-[100vh] 
    min-h-screen overflow-y-auto bg-black landing'>
      {/* <NNavbar></NNavbar> */}
      <NNNavbar></NNNavbar>

      <Home></Home>

    </div>
    </BrowserRouter>
  );
}

export default App;
