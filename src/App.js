import {useState} from 'react'


function App() {
const [bet, setbet] = useState(0)
const [amount, setamount] = useState(10)
const [message, setmessage] = useState('Place a bet!')
const [loading, setloading] = useState(false)
  const game = () =>{
    if (bet === 0) return setmessage('Bet can not be 0')
    if (bet>amount) return setmessage('You have low funds')
const decide = Math.random()>0.5
setloading(true)
setamount(prev => prev - bet)
setmessage('Wait a bit... Wish you luck...')
setTimeout(()=>{if (decide) {
  setloading(false)
  setmessage('You won!')
return setamount(prev => prev+bet*1.5)}
 setmessage('You lose, try again')
 setloading(false)
  }, 1000)

  }
  return (
    <div className="App">
    <h1>Your bet is {bet}</h1>

    <button onClick={()=>setbet(prev=>prev+1)}>Increase bet</button>
    <button  onClick={()=>setbet(prev=> prev === 0 ? 0 :prev-1)}>Decrease bet</button>
    <button disabled={loading} onClick={game}>Bet</button>
    <h1>Your gold: {amount}</h1>
    {message}
    </div>
  );
}

export default App;
