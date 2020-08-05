import React from 'react'
import NavBar from './components/navbar.component'
import CreateUser from './components/create-user.component'
import ExerciseList from './components/exercise-list.component'

function App() {
  return (
    <div>
      <NavBar />
      <CreateUser />
      <ExerciseList />
    </div>
  )
}

export default App;
