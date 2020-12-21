import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard'
import api from '../../services/api'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    api
      .get('/discover')
      .then((res) => {
        const getMovie = res.data
        setMovies(getMovie)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  return (
    <>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid
            key={movie.id}
            container
            item
            justify='space-evenly'
            alignItems='center'
            xs
          >
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export default Movies
