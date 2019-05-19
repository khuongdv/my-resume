import React from 'react'
import { Row, Col } from 'reactstrap'

class FooterNhe extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <hr />
                </Col>
                <Col sm={12} className="text-center">
                    &copy; 2019 - Dao Van Khuong
                </Col>
            </Row>
        )
    }
}

export default FooterNhe