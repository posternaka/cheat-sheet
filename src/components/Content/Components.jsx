import React from 'react'

function Components() {
  return (
    <div className="wrapper">
      <h1 className='h1'>Функциональные и классовые компоненты</h1>
      <p className='p'>Проще всего объявить React-компонент как функцию:</p>
      <pre>
        <code>
        {`
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
        `}
        </code>
      </pre>
      <p className='p'>
        Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.
      </p>
      <p className='p'>Ещё компоненты можно определять как классы ES6:</p>
      <pre>
        <code>
        {`
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}
        `}
        </code>
      </pre>
      <p className='p'>С точки зрения React, эти два компонента эквивалентны.</p>
      <p className='p'>Функциональным и классовым компонентам доступны дополнительные возможности, о которых мы поговорим в следующих главах.</p>
    </div>
  )
}

export default Components