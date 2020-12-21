import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import MovieCardInfo from './MovieCardInfo'

const MovieCard = ({ movie }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w500'
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          image={baseURL + movie.poster_path}
          alt={movie.original_title}
          title={movie.original_title}
        />
      </CardActionArea>
      <CardActions>
        <MovieCardInfo movie={movie} />
      </CardActions>
    </Card>
  )
}

export default MovieCard
