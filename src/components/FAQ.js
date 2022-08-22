import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col ,Button} from 'react-bootstrap';
function FAQ(){

    const [faqs,setfaqs] = useState([{'name':"Prethiv"}]);
    const fetchData=async ()=>{
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');

        setfaqs(resp.data)

        console.log(resp);
        console.log(faqs)
    
    };
   
  
    useEffect(()=>{
  fetchData();
       

      
    },[]);


    if (faqs==[]){ return false;
    }

    return (




      <Container>
        <Row><br/></Row>
        <Row><br/></Row>
                  <Row>
                      <Col id="faqTitle" className="col-3">FAQ</Col>
                      <Col></Col>
                      <Col className="col-7">
                      <input type="text" placeholder="FAQ's" className="form-control" />           
                      </Col>
                  </Row>
                  <Row><br/></Row>
                  <Row>
                    <Col className="col-3">
                    </Col>
                    <Col></Col>
                    <Col className="col-7">
                    <Button className="btn-primary" onClick={()=>{
                      window.open('/addfaq')
                    }}>+</Button>
                    </Col>
                  </Row>
  
                  <Row><br/></Row>
                  <Row><br/></Row>
                  
                    <Row>
                    
                    {faqs.map(item=>{
                       return <div>
                        <label>{item.name}</label><br/>
                        <label>{"This is a simple FAQ 1"}</label>
                       </div>
                    })}
                    </Row>
  
              </Container>
    );
  }
  export default FAQ;