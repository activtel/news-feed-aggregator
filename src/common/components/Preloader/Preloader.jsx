import React from 'react';

import './Preloader.css';
import logo from './logo.svg';

/**
 * Компонент прелоадера.
 * 
 */
const Preloader = () => <div className="text-center"><img src={logo} className="preloader-logo" alt="logo" /></div>;


export default Preloader;