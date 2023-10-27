import React from 'react'
import { Container,Box, Stack, Typography, Button } from '@mui/material'
import { section1Content } from '../utils/content'

const {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title,
  subtitle,
} = section1Content

const Section1 = () => {
  return (
    <Box>
      {/*main background*/}
      {/*background elements*/}
      {/*content*/}
      <Container sx={{bgcolor:'red', height:'80vh'}}>
        <Stack sx={{height:'inherit'}} justifyContent='center'>
          <Typography variant='h1'>{title}</Typography>
          <Typography variant='h2'>{subtitle}</Typography>
          <Stack direction='row'>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Section1