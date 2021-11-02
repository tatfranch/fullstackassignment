import useAll from '../../custom-hooks/useAll'
import tshirtBackground from '../../images/tshirt-background.jpeg'
import Layout from '../../components/Layout/'
import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@mui/material/Button'
import { useAppDispatch } from '../../redux/hooks'
import { addToCart } from '../../redux/features/cart/cartSlice'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: '100%',
    },
  })
)

function Index() {
  const [tshirts]: any = useAll('tshirts', 'GET')
  // console.log('monkey', tshirts)
  const classes = useStyles()

  const dispatch = useAppDispatch()
  const handleClick = (id: string) => () => {
    dispatch(addToCart(id))
  }

  return (
    <Layout>
      <img
        src={tshirtBackground}
        style={{
          backgroundPosition: 'top',
        }}
        alt="t-shirt rail"
      />
      {tshirts && (
        <Grid container>
          {tshirts.map((item: any) => {
            return (
              <Grid item xs={12} md={3} key={item._id}>
                <img className={classes.img} src={item.image} alt="t-shirt" />
                <p>{item.description}</p>
                <p>Prize: {item.prize} sek</p>
                <Button
                  onClick={handleClick(item._id)}
                  variant={'contained'}
                  color={'primary'}
                >
                  Add
                </Button>
                {console.log('items', item)}
              </Grid>
            )
          })}
        </Grid>
      )}
    </Layout>
  )
}

export default Index
