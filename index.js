import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col, Divider, Checkbox } from 'antd';

const style = { padding: '8px 0' };

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

ReactDOM.render(
  <>
    <Divider orientation="left">Добавление оповещения</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>Тип оповещения</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Электронный адрес</div>
      </Col>
    </Row>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>Сообщений подряд</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>Электронный адрес</div>
      </Col>
    </Row>
  </>,
  document.getElementById('container'),
);