import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreatePost from './Create';
import ShowPost from './Show';
import DataGrid from './Datagrid';
import FormHandling from './FormHandling';
import Dialog from './FormDialog';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CreatePost />
    <ShowPost /> */}
    <DataGrid></DataGrid>
    <FormHandling></FormHandling>
    <Dialog></Dialog>
  </React.StrictMode>
);
