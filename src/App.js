import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from "axios";
import AddHelpArticle from "./components/AddHelpArticle";
import FAQ from "./components/FAQ";
import HelpArticle from "./components/HelpArticle";
import AddFAQ from "./components/AddFAQ";
import './App.css';
function Home() {
  return (
    <Container>
      <Row>
        <Col className="col-6"><Link to="/faq">FAQ</Link></Col>
        <Col className="col-6"><Link to="/helparticle">HelpArticle</Link></Col>
      </Row>
    </Container>
  )
}


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/helparticle" element={<HelpArticle />} />
      <Route path="/addfaq" element={<AddFAQ />} />
      <Route path="/addhelparticle" element={<AddHelpArticle />} />
      <Route>404 Not Found!</Route>
    </Routes>
  </Router>
}
export default App;