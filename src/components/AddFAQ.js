import axios from 'axios';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AddFAQ() {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [error, setError] = useState(0);
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDesc(event.target.value);
    }

    const addFAQ = () => {
        axios.post('http://localhost:3001/addfaq', {
            title: title,
            description: desc
        }).then(
            res => {
                console.log("Response received", res);
                setError(1);
            }
        )
            .catch(err => {
                console.error(err);
                setError(2);
            })
    }

    return (

        <Container>
            <Row><br /></Row>
            <Row>
                <Col>Add FAQ</Col>
                <Col>
                    <input type="text" placeholder="Title" className="form-control" onChange={handleTitleChange} /><br />
                    <input type="text" placeholder="Description" className="form-control" onChange={handleDescriptionChange} /><br />
                    <Button className='btn-primary' onClick={addFAQ}>Add FAQ</Button>
                    {error === 2 ? <label style={{
                        fontFamily: 'calibri',
                        fontweight: 'bold',
                        fontSize: '20px',
                        color: 'red'
                    }}>&nbsp; &nbsp;Error adding FAQ</label> : null}
                    {error === 1 ? <label style={{
                        fontFamily: 'calibri',
                        fontweight: 'bold',
                        fontSize: '20px',
                        color: 'green'
                    }}>&nbsp; &nbsp;FAQ Added successfully</label> : null}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}


export default AddFAQ;