/** @format */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.css';
import Todo from './Todo';
import Todo_list from './Todo_list.jsx';
// import Root from './compon/root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
<div>
			{/* <App /> */}
			{/* <div className=' Container'>	<Todo /></div> */}
<Todo_list/>
</div>
	</React.StrictMode>
);
