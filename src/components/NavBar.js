import React from 'react';
import logo2 from '../assets/tienda-logo.png';
import CartWidget from './CartWidget';
import { NavLink} from "react-router-dom";

const NavBar = () => {
    const categories = [
        {name: "Ropa Masculina", id: 0, route: "/category/men's clothing"},
        {name: "Ropa Femenina", id: 1, route: "/category/women's clothing"},
        {name: "Electronica", id: 2, route: "/category/electronics"},
        {name: "Joyeria", id: 3, route: "/category/jewelery"},
    ];

    return (
        <>
        <header className="header">
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo2} alt='Logo de carrito' width="30" height="24" className="d-inline-block"></img>Compra tus productos
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <NavLink to="/cart"><CartWidget /></NavLink>
                            <li className="nav-item">
                                {
                                    categories.map((category) => {
                                        return (
                                            <NavLink key={category.id} className="nav-link d-inline-block active" aria-current="page" style={styles.lista} to={category.route}>{category.name}</NavLink>
                                        )
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default NavBar;

const styles = {
    lista:{
        listStyle: 'none',
        fontSize: '16px'
    }
}