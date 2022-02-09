import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

import Menu from '../../components/Menu';

import { FormatCurrency } from '../../utils/formatCurrency'

import { useStyles } from './styles';

function Products() {
    const classes = useStyles({});
    let { id } = useParams();
    const navigate = useNavigate();
    const { productsShop, setProductsShop } = useShop();

    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(async () => {
        const { data } = await api.get('/products');

        const findProduct = data.find(prod => prod.id == id)

        setProduct({ ...findProduct, valueFormated: FormatCurrency(findProduct.value) });
        setTotal(findProduct.value)
    }, []);

    useEffect(() => {
        setTotal(product.value * amount);
        setProduct({...product, quantidade: amount, total: product.value * amount})
    }, [amount]);

    function addShop() {
        setProductsShop([...productsShop, product]);

        navigate('/')
    }

    return (
        <>
            <Menu />

            <Container sx={{ py: 8 }} maxWidth="md" component="main" className={classes.heroContent}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.img}
                        image='https://source.unsplash.com/random'
                    />
                    <div className={classes.details}>
                        <Typography component="h5" variant="h5">
                            {product.title}
                        </Typography>
                        <Typography component="subtitle1" variant="textSecondary">
                            {product.description}
                        </Typography>
                        <Typography component="h5" variant="h5">
                            {product.valueFormated}
                        </Typography>
                        <div className={classes.controls}>
                            <IconButton onClick={() => { if (amount > 1) { setAmount(amount - 1) } }}>
                                <RemoveIcon />
                            </IconButton>

                            <Typography component="h5" variant='h5'>
                                {amount}
                            </Typography>

                            <IconButton onClick={() => { setAmount(amount + 1) }}>
                                <AddIcon />
                            </IconButton>
                        </div>
                        <Typography component="h5" variant='h5'>
                            Total
                        </Typography>

                        <Typography component="h5" variant='h5'>
                            {FormatCurrency(total)}
                        </Typography>

                        <IconButton color="primary" onClick={() => { addShop() }}>
                            <AddShoppingCartIcon fontSize="large" />
                        </IconButton>
                    </div>
                </Card>
            </Container>
        </>

    )
}

export default Products;