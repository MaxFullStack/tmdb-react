import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ImageContainer, { StyledImg, InfoContainer } from './styles'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const baseURL = 'https://image.tmdb.org/t/p/w500'

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon color='primary' />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const MovieCardInfo = ({ movie }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant='contained'
        size='small'
        color='primary'
        onClick={handleClickOpen}
      >
        Detalhes
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          {movie.title}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid
              container
              justify='center'
              alignItems='flex-start'
              item
              xs={12}
              sm={3}
            >
              <ImageContainer>
                <StyledImg
                  src={baseURL + movie.poster_path}
                  alt={movie.original_title}
                />
              </ImageContainer>
            </Grid>
            <Grid container item xs sm>
              <Grid item>
                <Typography variant='h6'>DETALHES</Typography>
                <InfoContainer>
                  <Typography variant='body2'>
                    <b>Título Original:</b>&nbsp;
                    {movie.original_title}
                    <br />
                    <b>Data de Lançamento:</b>&nbsp;
                    {movie.release_date}
                    <br />
                    <b>Sinopse:</b>&nbsp;
                    {movie.overview}
                  </Typography>
                </InfoContainer>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MovieCardInfo
