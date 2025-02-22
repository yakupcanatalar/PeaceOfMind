import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Company from './Pages/Company';
import Suggestion from './Pages/Suggestion';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AdminPanel from './Pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="bg-light min-vh-100 d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container">
            <Link className="navbar-brand text-white" to="/">Gönül Rahatlığı Rehberi</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/">Ana Sayfa</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/islemeler">İşletmeler</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link text-white" to="/iletisim">İletişim</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/oneri-sikayet">Öneri & Şikayet</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/hakkimizda">Hakkımızda</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/islemeler" element={<Company />} />
          {/* <Route path="/iletisim" element={<Contact />} /> */}
          <Route path="/oneri-sikayet" element={<Suggestion />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <footer className="bg-primary text-white py-4 w-100 mt-auto">
          <div className="container text-center">
            <p>&copy; 2025 Atalar Tasarım&Yazılım. Tüm Hakları Saklıdır.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;