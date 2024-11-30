import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import Matches from './components/Matches';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-slate-50">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;