import axios from 'axios';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AddHelpArticle() {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [imgurl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(0);
    const addHelpArticle = () => {
        axios.post('http://localhost:3001/addhelparticle', {
            title: title,
            subtitle: subtitle,
            imgurl: imgurl,
            description: description
        }).then(res => {
            setError(1);
        }).catch(err => {
            setError(2);
        })
    };

    return (
        <Container>
            <Row><br /></Row>
            <Row>
                <Col>Add Article</Col>
                <Col>
                    <input type="text" placeholder="Title" className="form-control" onChange={(event) => {
                        setTitle(event.target.value);
                    }} /><br />
                    <input type="text" placeholder="Subtitle" className="form-control" onChange={(event) => {
                        setSubtitle(event.target.value);
                    }} /><br />
                    <input type="text" placeholder="Image Url or Alt Text" className="form-control" onChange={(event) => {
                        setImgUrl(event.target.value);
                    }} /><br />
                    <textarea type="text" placeholder="Description" className="form-control" onChange={(event) => {
                        setDescription(event.target.value);
                    }} /><br />
                    <Button className='btn-primary' onClick={addHelpArticle}>Add HelpArticle</Button>
                    {error === 2 ? <label style={{
                        fontFamily: 'calibri',
                        fontweight: 'bold',
                        fontSize: '20px',
                        color: 'red'
                    }}>&nbsp; &nbsp;Error adding HelpArticle</label> : null}
                    {error === 1 ? <label style={{
                        fontFamily: 'calibri',
                        fontweight: 'bold',
                        fontSize: '20px',
                        color: 'green'
                    }}>&nbsp; &nbsp;HelpArticle Added successfully</label> : null}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}


export default AddHelpArticle;