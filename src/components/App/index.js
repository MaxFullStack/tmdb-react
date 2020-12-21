import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../theme/light'
import Navbar from '../Navbar'
import Container from '@material-ui/core/Container'
import Movies from '../Movies'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Movies />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
