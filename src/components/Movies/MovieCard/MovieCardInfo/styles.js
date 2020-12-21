import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'

const ImageContainer = styled.div`
  margin: 0 6px;
  background: #ffffff;
  display: inline-block;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.9);
`

export const StyledImg = styled.img`
  max-height: 240px;
  width: auto;
  border: 6px solid #ffffff;
`

export const InfoContainer = styled(Paper)`
  padding: 8px;
  word-wrap: nowrap;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.9);
`

export default ImageContainer
