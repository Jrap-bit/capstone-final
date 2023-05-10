import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 30,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 30,
    marginTop: '1rem',
    padding: '16px',
  },
  searchButton: {
    backgroundColor: '#3f51b5',
    color: 'white',
    marginLeft: '1rem',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
