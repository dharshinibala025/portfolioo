import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-8">
              <About />
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
