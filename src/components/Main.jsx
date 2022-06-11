import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Content/Home';
import Components from './Content/Components';
import Hooks from './Content/Hooks';
import Lifecycle from './Content/Lifecycle';
import Props from './Content/Props';
import ComponentRoute from './Content/ComponentRoute';
import State from './Content/State';
import VitrualDOM from './Content/VirtualDOM';


function Main() {
  // const useEffect = useEffect(

  // )

  return (
    <main>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/props" element={<Props />} />
          <Route path="/componentroute" element={<ComponentRoute />} />
          <Route path="/state" element={<State />} />
          <Route path="/virtualdom" element={<VitrualDOM />} />
        </Routes>
      </div>
    </main>
  )
}

export default Main