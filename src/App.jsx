import LeftComponent from "./components/LeftComponent"
import RightComponent from "./components/RightComponent"


function App() {


  return (
      <div className='min-h-screen justify-center bg-gradient-to-b from-prim1 to-prim2 flex-1  py-14 lg-py-24 px-7 flex gap-14'>
        <LeftComponent />
        <RightComponent />
      </div>
    
  )
}

export default App
