import React from 'react';
// import Signup from './components/Signup'; // Adjust the path as needed
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FollowEvent from './components/FollowEvent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Banner />
        <MainContent />
        <FollowEvent />
      </div>
      <Footer />
    </div>
  );
}
export default App;