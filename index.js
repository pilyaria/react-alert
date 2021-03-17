import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col, Divider, Checkbox, Cascader, InputNumber, Button } from 'antd';

const style = { padding: '8px 0' };

const options = [
  {
    value: 'e-mail',
    label: 'e-mail',
  },
  {
    value: 'sms',
    label: 'sms',
  },
];

//функция изменения чекбокса
function onChang(e) {
  console.log(`checked = ${e.target.checked}`);
}

//функция изменения комбобокса (каскадера)
function onChange(value) {
  console.log(value);
}

function Choice(val)
{
  if (val == 'e-mail') res = 'Электронный адрес'
    else res = 'Номер телефона'
  return res
}

ReactDOM.render(
  <>
    <Divider orientation="left">Добавление оповещения</Divider>
    <Row gutter={[8, 16]}>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          Тип оповещения
          <Cascader
            defaultValue={['e-mail']}
            options={options}
            onChange={onChange}
          />
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
        
          Choice(options.label)
        
         
        </div>
      </Col>
    </Row>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          Сообщений подряд
          <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}><Checkbox onChange={onChange}>Отсутствие связи с прибором</Checkbox></div>
      </Col>
    </Row>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Checkbox onChange={onChange}>Групповые условия</Checkbox>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Checkbox onChange={onChange}>Срабатывание датчиков</Checkbox>
        </div>
      </Col>
    </Row>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Checkbox onChange={onChange}>Контроль переменных</Checkbox>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Checkbox onChange={onChange}>Сообщения о поверке</Checkbox>
        </div>
      </Col>
    </Row>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Checkbox onChange={onChange}>Неверное время прибора</Checkbox>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Checkbox onChange={onChange}>Изменение параметров прибора</Checkbox>
        </div>
      </Col>
    </Row>
     <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Checkbox onChange={onChange}>Условия прибора</Checkbox>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Checkbox onChange={onChange}>Высылать месячные отчёты</Checkbox>
        </div>
      </Col>
    </Row>
    <Button type="primary">Добавить</Button>' '
    <Button>Отмена</Button>
  </>,
  document.getElementById('container'),
);