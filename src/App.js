import React from 'react';

import cyber from './cyber.jpg';
import farm from './farm.jfif';
import forza from './forza.jfif';
import tear from './tear.jfif';

// function App() {
//   return <div>
//     <Product name="product1" cost="100" />
//     <Product name="product2" cost="200" />
//     <Product name="product3" cost="300" />
//   </div>;
// }

// import Product from './Product';
// function App() {
//   const name1 = 'Яблока';
//   const cost1 = '100';

//   const name2 = 'Груша';
//   const cost2 = '150';

//   const name3 = 'Арбуз';
//   const cost3 = '250';

//   return <div className='Prod'>
//     <Product   name={name1} cost={cost1} />
//     <Product   name={name2} cost={cost2} />
//     <Product name={name3} cost={cost3} />
//   </div>;
// }

import Igri from './Igri.js';

function App() {
  const foto1 = cyber;
  const name1 = 'Cyberpunk 2077';
  const cena1 = '1449';

  const foto2 = farm;
  const name2 = 'Farming Simuliator 2022';
  const cena2 = '2099';

  const foto3 = forza;
  const name3 = 'Forza Horizon 4';
  const cena3 = '799';

  const foto4 = tear;
  const name4 = 'TearDown';
  const cena4 = '1700';

  return <div className='Igri'>
    <Igri foto={foto1}  name={name1} cena={cena1} />
    <Igri foto={foto2} name={name2} cena={cena2} />
    <Igri foto={foto3} name={name3} cena={cena3} />
    <Igri foto={foto4} name={name4} cena={cena4} />
  </div>;
}


export default App;
