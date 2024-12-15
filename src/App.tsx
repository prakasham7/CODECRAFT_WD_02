import React from 'react';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Example content sections */}
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Site</h1>
        </section>
        
        <section id="about" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center justify-center bg-purple-50">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        </section>
        
        <section id="blog" className="min-h-screen flex items-center justify-center bg-white">
          <h2 className="text-3xl font-bold text-gray-800">Our Blog</h2>
        </section>
      </div>
    </div>
  );
}

export default App;