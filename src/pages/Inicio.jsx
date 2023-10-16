import { useContext } from 'react'
import Card from '../components/Card'
import './Inicio.scss'
import ProductoContext from '../contexts/ProductoContext'
import HeaderTitle from '../components/HeaderTitle'

const Inicio = () => {
  const { productos } = useContext(ProductoContext)

  return (
  <main>
      
    <section className="section-cards">
    {productos && <HeaderTitle title={"LISTADO DE PRODUCTOS"} subtitle={'Se encontraron '+productos.length+" productos"}></HeaderTitle>}
    
      <div className="cards-container">
        {
          productos && productos.map( (producto, idx) => (
            <Card key={idx} producto={producto} />
          ))
        }
        
      </div> {/* <!-- .cards-container --> */}

    </section> {/* <!-- .section-cards --> */}
  </main> 
  )
}

export default Inicio