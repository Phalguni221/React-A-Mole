import {useEffect} from 'react'

import moleImg from './mole.png'

import moleHill from './molehill.png'


//useEffect hook for Timer and Reset Timer
const EmptySlot = (props) => {
        useEffect(() => {
            // Feel free to adjust this number as you see fit.
            // It is your game to tune!
            let randSeconds = Math.ceil(Math.random() * 5000)
            let timer = setTimeout(() => {
                props.setDisplayMole(true)
            }, randSeconds)
            return () => clearTimeout(timer)
        })

        return (
            <div>
                <img style={{'width': '30vw'}} src={moleHill} />
            </div>
        )
    }


export default EmptySlot