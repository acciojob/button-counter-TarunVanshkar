
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        let [count, setCount] = useState(0)

        function countClick(){
          setCount(count+1)
        }

        return(
          <div>
            <p>Button clicked {count} times</p>
            <button onClick={countClick}>Click me</button>
          </div>
        )
    </div>
  )
}

export default App
