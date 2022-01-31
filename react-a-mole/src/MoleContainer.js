import {useState} from 'react'

import './App.css'

import Mole from './Mole'

import EmptySlot from './EmptySlot'


// let [increment, setIncrement] = useState('')
//Make useState into a Boolean statement

    // Just one example
 const MoleContainer = (props) => {
    let [mole, setMole] = useState(false)

            const handleClick = (e) => {
             props.setScore(props.score + 1)
             setMole(false)
            }

    let displayMole = mole ? <Mole setScore={props.setScore} toggle={setMole} handleClick={handleClick} /> : <EmptySlot toggle={setMole} />
    
// let displayMole = false;
// if (displayMole) {
//     return (
//         <div>
//             <h2>  <Mole/> </h2>
//         </div>
//               )
//     } 
//  else {
//     return (
//     <div>
//         <h2> <EmptySlot/> </h2>
//     </div>
//             )
//    }

   return (
    <div style={{'display': 'inline-block', 'width': '30vw'}}>
        {displayMole}
    </div>
)

   }
  


export default MoleContainer;

