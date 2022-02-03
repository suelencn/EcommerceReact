import React, { useState, useEffect} from 'react'; //boa pratica colocar sempre
import { useParams, useNavigate, Navigate } from 'react-router';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import api from '../../services/api';
import { useShop } from '../../context/shop'

import Menu from "../../components/Menu";

import { FormatCurrency } from '../../utils/formatCurrency';

import { useStyles } from './styles';


function Products(){
    const classes = useStyles();
    let { id } = useParams();
    const navegate = useNavigate();
    const{ productsShop, setProductsShop } = useShop()

    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(async()=> {
        const { data } = await api.get('/products');
        
        const findProduct = data.find(prod => prod.id == id)
 
         setProduct({...findProduct, valueFormatted: FormatCurrency(findProduct.value)}); //... significa incluir ao objeto findProduct tais coisas: formatação moeda
        setTotal(findProduct.value)
    },[]); //[vazio]acontece apenas quando abrir a pagina

    useEffect(() => {
        setTotal(product.value * amount);
    }, [amount]); //toda vez que a variavel amount for modificada esse useEffect será acionado

    function addShop(){
        setProductsShop([...productsShop, product]);
        console.log([...productsShop, product]);
        navegate('/')
    }

    return(
        <>
            <Menu/>
            <Container sx={{py:8}} maxWidth="md" component="main" className={classes.heroContent}>
                <Card className = {classes.root}>
                    <CardMedia
                    className = {classes.img}
                    image = 'https://source.unsplash.com/random'
                    />
                    <div className={classes.details}>
                        <Typography component="h5" variante='h5'>
                            {product.title}
                        </Typography>
                        <Typography component="subtitle1" variante='textSecondary'>
                            {product.description}
                        </Typography>
                        <Typography component="h5" variante='h5'>
                            {product.valueFormatted}
                        </Typography>

                        <div className={classes.controls}>
                            <IconButton onClick={() => {if (amount > 1) {setAmount(amount - 1)}}}>
                                <RemoveIcon/>
                            </IconButton>

                            <Typography component="h5" variante='h5'>
                                {amount}
                            </Typography>

                            <IconButton onClick={() => {setAmount(amount + 1)}}>
                                <AddIcon/>
                            </IconButton>
                        </div>

                        <Typography component="h5" variante='h5'>
                            Total
                        </Typography>
                        <Typography component="h5" variante='h5'>
                            {total}
                        </Typography>

                        <IconButton color="primary" onClick={() => {addShop()}}>
                            <AddShoppingCartIcon fontSize="large"/>
                        </IconButton>
                    </div>    
                </Card>
            </Container> 
        </>   
    )
}

export default Products;