import React from 'react';
import './style.css';
import UseCallbackexample from './components/HooksExample/useCallbackexample';
import Usememoexample from './components/HooksExample/usememoexample';

export default function App() {
  return (
    <>
      <h4>UseCallBack</h4>
      <UseCallbackexample />
      ___________________________________________
      <h4>UseMemo</h4>
      <Usememoexample />
    </>
  );
}
