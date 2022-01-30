import React, {useState} from 'React'

import App from './App'

import './App.css'

import Mole from './Mole'

import EmptySlot from './EmptySlot'


let [increment, setIncrement] = useState('')
//Make useState into a Boolean statement

    // Just one example
function MoleContainer(props){
    let [mole, displayMole] = useState(false);
    //handleClick function that will increment score by 1

    //Variable will determine which component to render 
        return (
            <div>
                <h2> Mole Container </h2>
                <Mole />
            </div>
        )
    }

    return (
        <div>
            <h2> Mole Container </h2>
            <EmptySlot />
        </div>
    )
    //Ternary which will determine which child to render

export default MoleContainer;

