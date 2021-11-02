import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import useAll from '../custom-hooks/useAll'
import Divider from '@material-ui/core/divider'
import cartLogo from '../images/cart.png'

//let's rock this redux
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { Grid } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const cart = useAppSelector((state) => state.cart.value)
  const [tshirts]: any = useAll('tshirts', 'GET')
  const filterTshirts =
    tshirts &&
    tshirts.filter((tshirt: any) => {
      return cart.includes(tshirt._id)
    })

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={cartLogo} height={50} width={50} alt="cart icon" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display="flex" justifyContent="center">
          <Grid container>
            {tshirts &&
              filterTshirts.map((item: any) => (
                <Grid item xs={12} key={item._id}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <img
                      style={{ width: '100px' }}
                      src={item.image}
                      alt="t-shirt"
                    />
                    <p>{item.description}</p>
                    <p>Prize: {item.prize} sek</p>
                    <Divider style={{ width: '100%', height: '3px' }} />
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
