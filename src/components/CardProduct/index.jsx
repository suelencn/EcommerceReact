import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "./styles";
import { FormatCurrency } from "../../utils/formatCurrency";

import { useEffect } from "react";

const CardProduct = ({ product, removeItem, addItem, deleteItem }) => {
  const classes = useStyles();
  useEffect(() => {
    product.total = FormatCurrency(product.total);
    console.log(product);
  }, [product]);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={`${product.image}`}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton
            onClick={
              product.quantidade > 1 ? () => removeItem(product.id) : null
            }
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="h5" color="textSecondary">
            {product.quantidade}
          </Typography>
          <IconButton onClick={() => addItem(product.id)}>
            <AddIcon />
          </IconButton>
          <Typography variant="h5" color="textSecondary">
            {product.total}
          </Typography>
          <IconButton
            className={classes.delete}
            onClick={() => deleteItem(product.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default CardProduct;