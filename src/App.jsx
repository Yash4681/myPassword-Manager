import "./App.css";
import Footer from "./components/Footer";
import Manager from "./components/Manager";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <NavBar />
        <div className="absolute bottom-auto -z-10 left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[90%] -translate-y-10 rounded-full bg-[rgba(173,109,244,0.5)] opacity-40 blur-[80px]"></div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Manager />
        <Footer />
      </div>
    </>
  );
}

export default App;
