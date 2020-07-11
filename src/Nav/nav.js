import React from 'react'
import './nav.scss';

import { Row, Col} from 'antd';
export default function Nav() {
  return (
    <div className={"nav"}>
      <Row>
        <Col span={8} offset={2}>
          <h2>Restraunt</h2>
        </Col>
        <Col span={2} offset={4} >
        </Col>
        <Col span={2} offset={8}>
          <button className={"write"}>Logout</button>
        </Col> 
      </Row>
    </div>
  )
}