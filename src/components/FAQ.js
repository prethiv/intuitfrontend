import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from 'react-bootstrap';
import _ from 'lodash';
function FAQ() {

  const [faqs, setfaqs] = useState([]);

  const fetchData = async () => {
    const resp = await axios.get('http://localhost:3001/latestfaqs');

    setfaqs(resp.data)

    console.log(resp);
    console.log(faqs)

  };

  const handlesearchChangeText = (event) => {
    let searchText = event.target.value;
    axios.post('http://localhost:3001/searchfaqs', {
      searchText
    }).then(res => {
      setfaqs(res.data);
    }).catch(err => {
      setfaqs([]);
    })
  }
  const debounceFn = useCallback(_.debounce(handlesearchChangeText, 1000), []);

  useEffect(() => {
    fetchData();



  }, []);


  if (faqs === []) {
    return false;
  }

  return (




    <Container>
      <Row><br /></Row>
      <Row><br /></Row>
      <Row>
        <Col id="faqTitle" className="col-3">FAQ</Col>
        <Col></Col>
        <Col className="col-7">
          <input type="text" placeholder="FAQ's" className="form-control" onChange={debounceFn} />
        </Col>
      </Row>
      <Row><br /></Row>
      <Row>
        <Col className="col-3">
        </Col>
        <Col></Col>
        <Col className="col-7">
          <Button className="btn-primary" onClick={() => {
            window.open('/addfaq')
          }}>+</Button>
        </Col>
      </Row>

      <Row><br /></Row>
      <Row><br /></Row>

      <Row>

        {faqs.map(item => {
          return <div>
            <label style={{
              fontFamily: 'calibri',
              fontWeight: "bold",
              fontSize: "30px"
            }}>{item.title}</label><br />
            <label
              style={{
                fontFamily: 'calibri'
              }} >{item.descript}</label><br />
            <label
              style={{
                fontFamily: 'calibri',
                fontSize: '12px'
              }}>{new Date(parseInt(item.timeCreated)).toDateString()}</label>
            <br />
            <hr />
          </div>
        })}
      </Row>

    </Container>
  );
}
export default FAQ;