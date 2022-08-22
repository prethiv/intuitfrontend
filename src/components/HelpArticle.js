import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col ,Button} from 'react-bootstrap';
function HelpArticle(){

    const [articles,setArticles] = useState([]);
    const fetchData=async ()=>{
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');

        setArticles(resp.data)

        console.log(resp);
        console.log(articles)
    
    };
   
  
    useEffect(()=>{
  fetchData();
       

      
    },[]);


    if (articles==[]){ return false;
    }

    return (




      <Container>
        <Row><br/></Row>
        <Row><br/></Row>
                  <Row>
                      <Col id="faqTitle" className="col-3">HelpArticle</Col>
                      <Col></Col>
                      <Col className="col-7">
                      <input type="text" placeholder="Ariticle's" className="form-control" />           
                      </Col>
                  </Row>
                  <Row><br/></Row>
                  <Row>
                    <Col className="col-3">
                    </Col>
                    <Col></Col>
                    <Col className="col-7">
                    <Button className="btn-primary" onClick={()=>{
                      window.open('/addhelparticle')
                    }}>+</Button>
                    </Col>
                  </Row>
  
                  <Row><br/></Row>
                  <Row><br/></Row>
                  
                    <Row>
                    
                    {articles.map(item=>{
                       return <li>{item.name}</li>
                    })}
                    </Row>
  
              </Container>
    );
  }
  export default HelpArticle;