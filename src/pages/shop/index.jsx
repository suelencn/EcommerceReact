import React from 'react';
import Menu from "../../components/Menu";

import { useStyles } from './styles';

import { useShop } from '../../context/shop';


function Shop(){
    const { productsShop } = useShop(); //tudo que tem no carrinho esta nessa variavel

    //olhar DataGrid no Material ui
    return(
        <>
        <Menu/>
        <h1>Shop</h1>
        </>
    )
}

export default Shop;