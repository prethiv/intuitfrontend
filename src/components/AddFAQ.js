import { Container, Row, Col ,Button} from 'react-bootstrap';

function AddFAQ(){
    return (

        <Container>
            <Row><br/></Row>
            <Row>
                <Col>Add FAQ</Col>
                <Col>
                <input type="text" placeholder="Title"  className="form-control" /><br/>
                <input type="text" placeholder="Description"  className="form-control" /><br/>
                <Button className='btn-primary'>Add FAQ</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}


export default AddFAQ;