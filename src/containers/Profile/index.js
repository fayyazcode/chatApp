import { MyAppBar, Input, BasicButtons } from "../../components"
import { Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'

export default function Profile(){
    return(
      <Container>
          <Row>
                <Col><MyAppBar  title="Profile"  />
                </Col>
            </Row>
            <Row>
            <div className="justify-content-around mt-auto">
              <BasicButtons>
                <Link to="/chat">Chat</Link>
              </BasicButtons>
            </div>
            </Row>
      </Container>
    )
}