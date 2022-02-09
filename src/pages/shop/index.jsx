import React, { useEffect } from "react";
import Menu from "../../components/Menu";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { useShop } from "../../context/shop";

import CardProduct from "../../components/CardProduct";
import { FormatCurrency } from "../../utils/formatCurrency";

import { useStyles } from "./styles";
import { useState } from "react";

function Shop() {
  const { productsShop, setProductsShop } = useShop();
  const { total, setTotal } = useState(1);
  const classes = useStyles({});

  const removeItem = (id) => {
    const product = productsShop.find((item) => item.id === id);
    product.quantidade = product.quantidade - 1;
    product.total = FormatCurrency(product.quantidade * product.value);

    setProductsShop((prevProductsShop) => {
      return [...new Set([...prevProductsShop, product])];
    });
  };

  const addItem = (id) => {
    const product = productsShop.find((item) => item.id === id);
    product.quantidade = product.quantidade + 1;
    product.total = FormatCurrency(product.quantidade * product.value);

    setProductsShop((prevProductsShop) => {
      return [...new Set([...prevProductsShop, product])];
    });
  };

  const deleteItem = (id) => {
    const auxProducts = productsShop.filter((item) => item.id !== id);
    setProductsShop(auxProducts);
  };

  return (
    <>
      <Menu />
      <Grid container spacing={1}>
        {productsShop.map((item) => {
          return (
            <Box
              sx={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                alignContent: "center",
              }}
            >
              <CardProduct
                product={item}
                addItem={addItem}
                removeItem={removeItem}
                deleteItem={deleteItem}
              />
            </Box>
          );
        })}
      </Grid>
      {/* <Divider className={classes.divider} />
      <Box>Total: {total}</Box> */}
    </>
  );
}

export default Shop;
