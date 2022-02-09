import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(1),
    width: "750px",
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  prices: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  delete: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  margin: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;