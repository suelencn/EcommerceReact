import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  root: {
    display: 'flex',
    padding: 15
  },
  divider: {
    margin: theme.spacing(2),
    width: 100,
    height: 10,
  },
}));
