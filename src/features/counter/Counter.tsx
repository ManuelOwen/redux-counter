
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RoostState } from '../../app/store'
import { increment, incrementByAmount,decrement } from './counterSlice'

const Counter = () => {
    const count = useSelector((state:RoostState) => state.counter.value)
    const dispatch:AppDispatch =useDispatch()


    const IncrementFunc =() =>{
        dispatch(increment())

    }
    const incrementByAmountFunc = () =>{
        dispatch(incrementByAmount(5)) 
    }
    const decrementFunc = () =>{
        dispatch(decrement())
    }
  return (
    <div className='bg bg-red-400 h-96 w-96 justify-center text-center items-center shadow-outline   '>
        <button className='justify-center text-center items-center'  onClick={IncrementFunc}>Increment</button>
        <span>{count}</span>
        <button onClick={decrementFunc}>Decrement</button>
        <button onClick={incrementByAmountFunc}>Increment by Amount</button>

    </div>
  )
}

export default Counter