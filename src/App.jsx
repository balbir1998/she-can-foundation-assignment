import './App.css'
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  return (
    <>
      <Header />
      <main className={`pb-12.5 ${darkMode ? "bg-[#121212] text-white" : "bg-[#F5F7FF]"}
                        transform-all duration-400`}>
        <About darkMode={darkMode} setDarkMode={setDarkMode} />
      </main>
      <Footer />
    </>
  )
}

export default App;