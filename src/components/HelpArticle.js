import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from 'react-bootstrap';
import _ from 'lodash';
function HelpArticle() {

  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    const resp = await axios.get('http://localhost:3001/latesthelparticle');

    setArticles(resp.data)

    console.log(resp);
    console.log(articles)

  };

  const handleSearchHelpArticle = (event) => {
    let searchText = event.target.value;
    axios.post('http://localhost:3001/searchhelparticle', {
      searchText: searchText
    }).then(res => {
      setArticles(res.data);
    }).catch(err => {
      setArticles([]);
    })
  };

  const debounceFn = useCallback(_.debounce(handleSearchHelpArticle, 1000), []);
  useEffect(() => {
    fetchData();



  }, []);


  if (articles === []) {
    return false;
  }

  return (




    <Container>
      <Row><br /></Row>
      <Row><br /></Row>
      <Row>
        <Col id="faqTitle" className="col-3">HelpArticle</Col>
        <Col></Col>
        <Col className="col-7">
          <input type="text" placeholder="Ariticle's" className="form-control" onChange={debounceFn} />
        </Col>
      </Row>
      <Row><br /></Row>
      <Row>
        <Col className="col-3">
        </Col>
        <Col></Col>
        <Col className="col-7">
          <Button className="btn-primary" onClick={() => {
            window.open('/addhelparticle')
          }}>+</Button>
        </Col>
      </Row>

      <Row><br /></Row>
      <Row><br /></Row>

      <Row>

        {articles.map(item => {
          return <div>
            <label style={{
              fontFamily: 'calibri',
              fontWeight: "bold",
              fontSize: "30px"
            }}>{item.title}</label><br />
            <label
              style={{
                fontFamily: 'calibri'
              }} >{item.subtitle}</label><br />
            <a href={item.imgurl}>{item.imgurl}</a><br />
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
export default HelpArticle;