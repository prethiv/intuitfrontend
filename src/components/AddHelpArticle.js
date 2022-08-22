import { Container, Row, Col ,Button} from 'react-bootstrap';

function AddHelpArticle(){
    return (
        <Container>
            <Row><br/></Row>
            <Row>
                <Col>Add Article</Col>
                <Col>
                <input type="text" placeholder="Title"  className="form-control" /><br/>
                <input type="text" placeholder="Subtitle"  className="form-control" /><br/>
                <input type="text" placeholder="Image Url or Alt Text"  className="form-control" /><br/>
                <textarea type="text" placeholder="Description"  className="form-control" /><br/>
                <Button className='btn-primary'>Add HelpArticle</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container> 
    );
}


export default AddHelpArticle;