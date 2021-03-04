import React from 'react';
import './App.css';
import Products from "./components/admin/Products";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./components/main/Main";
import ProductsCreate from "./components/admin/ProductsCreate";
import ProductEdit from './components/admin/ProductEdit';

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Route path='/' exact component={Main}/>
                <Route path='/admin/products' component={Products}/>
                <Route path='/admin/products/create' component={ProductsCreate} />
                <Route path='/admin/products/:id/edit' component={ProductEdit} />
            </BrowserRouter>

        </div>
    );
}

export default App;
