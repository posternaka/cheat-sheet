import React from 'react'

function State() {
  return (
    <div className="wrapper">
      <h1 className='h1'>Состояние компонента</h1>
      <h3 className='h3'>Что делает setState?</h3>
      <p className='p'>
        Метод setState() планирует изменение объекта состояния (state) компонента. Когда состояние меняется, компонент рендерится повторно.
      </p>
      <h3 className='h3'>Какая разница между state и props?</h3>
      <p className='p'>
        props (намеренно сокращённо от англ. «properties» — свойства) и state — это обычные JavaScript-объекты. Несмотря на то, что оба содержат информацию, которая влияет на то, что увидим после рендера, есть существенное различие: props передаётся в компонент (служат как параметры функции), в то время как state находится внутри компонента (по аналогии с переменными, которые объявлены внутри функции).
      </p>
    </div>
  )
}

export default State