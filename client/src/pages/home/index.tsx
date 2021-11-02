import useAll from '../../custom-hooks/useAll'
import tshirtBackground from '../../images/tshirt-background.jpeg'
import Layout from '../../components/Layout/'

function Index() {
  const [tshirts]: any = useAll('tshirts', 'GET')
  console.log('monkey', tshirts)
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
        <div>
          {tshirts.map((item: any) => {
            return <img src={item.image} key={item._id} alt="t-shirt" />
          })}
        </div>
      )}
    </Layout>
  )
}

export default Index
