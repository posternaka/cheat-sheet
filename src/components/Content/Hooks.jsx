import React from 'react'

function Hooks() {
  return (
    <div className='wrapper'>
      <h1 className='h1'>Основные хуки</h1>
      <h3 className='h3'>useState</h3>
      <pre>
        <code>
        {`
const [state, setState] = useState(initialState);
        `}
        </code>
      </pre>
      <p className='p'>Возвращает значение с состоянием и функцию для его обновления.</p>
      <p className='p'>
        Во время первоначального рендеринга возвращаемое состояние (state) совпадает со значением, переданным в качестве первого аргумента (initialState).
      </p>
      <p className='p'>
        Функция setState используется для обновления состояния. Она принимает новое значение состояния и ставит в очередь повторный рендер компонента.
      </p>
      <pre>
        <code>
        {`
setState(newState);
        `}
        </code>
      </pre>
      <p className='p'>
        Во время последующих повторных рендеров первое значение, возвращаемое useState, всегда будет самым последним состоянием после применения обновлений.
      </p>
      <h3 className='h3'>useEffect</h3>
      <pre>
        <code>
        {`
useEffect(didUpdate);
        `}
        </code>
      </pre>
      <p className='p'>Принимает функцию, которая содержит императивный код, возможно, с эффектами.</p>
      <p className='p'>
        Мутации, подписки, таймеры, логирование и другие побочные эффекты не допускаются внутри основного тела функционального компонента (называемого этапом рендеринга React). Это приведёт к запутанным ошибкам и несоответствиям в пользовательском интерфейсе. 
      </p>
      <p className='p'>
        Вместо этого используйте useEffect. Функция, переданная в useEffect, будет запущена после того, как рендер будет зафиксирован на экране. Думайте об эффектах как о лазейке из чисто функционального мира React в мир императивов.
      </p>
      <p className='p'>
        По умолчанию эффекты запускаются после каждого завершённого рендеринга, но вы можете решить запускать их только при изменении определённых значений.
      </p>
      <h3 className='h3'>useContext</h3>
      <pre>
        <code>
        {`
const value = useContext(MyContext);
        `}
        </code>
      </pre>
      <p className='p'>
        Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее значение контекста для этого  контекста. Текущее значение контекста определяется пропом value ближайшего MyContext.Provider над вызывающим компонентом в дереве.
      </p>
      <p className='p'>
        Когда ближайший MyContext.Provider над компонентом обновляется, этот хук вызовет повторный рендер с последним значением контекста, переданным этому провайдеру MyContext. Даже если родительский компонент использует React.memo или реализует shouldComponentUpdate, то повторный рендер будет выполняться, начиная c компонента, использующего useContext.
      </p>
      <p className='p'>
        Запомните, аргументом для useContext должен быть непосредственно сам объект контекста:
      </p>
      <ul>
        <li>- правильно: useContext(MyContext);</li>
        <li>- неправильно: useContext(MyContext.Consumer);</li>
        <li>- неправильно: useContext(MyContext.Provider).</li>
      </ul>
      <p className='p'>
        Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения контекста. Если повторный рендер компонента затратен, вы можете оптимизировать его с помощью мемоизации.
      </p>
    </div>
  )
}

export default Hooks