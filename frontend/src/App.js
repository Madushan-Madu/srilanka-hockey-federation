import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NationalTeamNewsPage from './pages/NationalTeamNewsPage';
import AssociationsPage from './pages/AssociationsPage';
import TournamentsPage from './pages/TournamentsPage';
import EquipmentsPage from './pages/EquipmentsPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage'; // For 404 errors

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/news" element={<NationalTeamNewsPage />} />
          <Route path="/associations" element={<AssociationsPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/equipment" element={<EquipmentsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
  // We'll create these components and pages in later steps.
  // For now, you might see errors if you try to run it, which is expected.
}

export default App;