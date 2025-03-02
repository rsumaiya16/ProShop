// src/App.js
import React from 'react';
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap
import Header from './components/Header'; // Correct import of Header
import Footer from './components/Footer'; // Correct import of Footer
import HomeScreen from './screens/HomeScreen'; // Correct import of HomeScreen


const App = () => {
  
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
     <Footer/>
     
 
    </>
  );
};

export default App;
