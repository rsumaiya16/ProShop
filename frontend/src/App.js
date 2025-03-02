// src/App.js
import React from 'react';
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap
import Header from './components/Header'; // Correct import of Header
import Footer from './components/Footer'; // Correct import of Footer


const App = () => {
  
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1> {/* Inside the Container for proper layout */}
        </Container>
      </main>
     
 
    </>
  );
};

export default App;
