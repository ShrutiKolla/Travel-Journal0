
// components
import Nav from './Components/Nav.jsx'
import Card from './Components/Card.jsx'

// css
import appCss from './assets/css/app.module.css';

//data
import {cardsArr} from './Components/cardsDb.js'; 

function App() {

  const cards = cardsArr.map((card, idx) => {
    return (
      <Card key = {idx}
            {...card}      
      />
    );
  })

  return (
    <>
      <Nav />
      <section >
        {cards}
      </section>
    </>
  )
}

export default App
