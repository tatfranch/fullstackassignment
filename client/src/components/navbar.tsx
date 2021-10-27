import React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Icon from '@mui/material/Icon'
import tshirtIcon from '../images/t-shirt.png'
import GoogleButon from '../components/googleButton'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#252525' }}>
        <Toolbar>
          <Icon>
            <img src={tshirtIcon} height={25} width={25} alt="tshirt icon" />
          </Icon>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            THE T-shirt STORE
          </Typography>

          <GoogleButon />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
