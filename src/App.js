import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import ClearfixPage from './Clearfix';
import Cards from './Components/Cards';
import Row from 'react-bootstrap/Row';
import Search from './Components/Serch';


function App() {
  
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <ClearfixPage/>
        </header>
      </div>
      <main>
        <Search/>
        <Row>
          <Cards/>
        </Row>
        
      </main>
    </Container>
  );
};

export default App;
