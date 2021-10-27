import useAll from '../../custom-hooks/useAll'

function Index() {
  const [tshirts]: any = useAll('tshirts', 'GET')
  console.log('monkey', tshirts)
  return (
    <div>
      {tshirts && (
        <div>
          {tshirts.data.map((item: any) => {
            return <img src={item.image} key={item._id} alt="t-shirt" />
          })}
        </div>
      )}
    </div>
  )
}

export default Index
