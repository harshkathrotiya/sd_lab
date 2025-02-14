'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import People from '../components/People';
import Research from '../components/Research';
import Publications from '../components/Publications';
import Events from '../components/Events';
import Contact from '../components/Contact';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'people':
        return <People />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      case 'events':
        return <Events />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}