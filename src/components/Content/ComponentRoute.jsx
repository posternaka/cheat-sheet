import React from 'react';

function ComponentRoute() {
  return (
    <div className='wrapper'>
      <h1 className='h1'>Что такое React Router DOM?</h1>
      <p className='p'>
        Теперь, когда у нас есть базовое представление о React Router, давайте бегло взглянем на React-Router-DOM. React Router DOM — это модуль узла, который предназначен для маршрутизации в веб-приложениях. Он позволяет инженерам создавать маршруты для одностраничного приложения React. Достаточно просто. Далее рассмотрим компоненты React Router.
      </p>
      <h3 className='h3'>BrowserRouter, Route, Switch и Link</h3>
      <p className='p'>
        BrowserRouter, Route, Switch и Link — все это компоненты React-Router. Эти компоненты делятся на три категории.
      </p>
      <p className='p'>
        К первой категории относятся, например, маршрутизаторы BrowserRouter. Вторая категория — это сопоставители маршрутов, такие как Route и Switch, и последняя категория — это навигация, например Link и Redirect.
      </p>
      <p className='p'>
        Помимо всех этих мощных компонентов, есть несколько очень полезных хуков, которые действительно помогают, предоставляя дополнительную информацию, которую мы можем использовать в наших компонентах. Это: useHistory, useParam, и useLocation.
      </p>
      <h3 className='h3'>useHistory</h3>
      <p className='p'>
        Согласно документации react router, хук useHistory дает вам доступ к экземпляру истории, который вы можете использовать для навигации. Через объект истории мы можем получить доступ и управлять текущим состоянием истории браузера.
      </p>
      <h3 className='h3'>useParam</h3>
      <p className='p'>
        Хук useParam возвращает объект пары ключ/значение параметров URL, где ключ — это имя параметра, а значение — текущее значение параметра. Другими словами, он обеспечивает доступ к параметрам поиска в URL.
      </p>
      <h3 className='h3'>useLocation</h3>
      <p className='p'>
        Хук useLocation эквивалентен useState, но при изменении URL-адреса возвращает новое местоположение. Проще говоря, хук useLocation возвращает объект местоположения, представляющий текущий URL.
      </p>
    </div>
  )
}

export default ComponentRoute