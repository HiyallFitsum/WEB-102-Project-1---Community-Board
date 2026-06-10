import { concerts } from "./data/concerts"
import Card from "./components/Card"
import "./App.css"

function App() {
  return (
    <div className="app">
      <header>
        <h1>Maryland Hip-Hop & R&B Concerts</h1>
        <p>Upcoming shows across the DMV area</p>
      </header>
      <div className="grid">
        {concerts.map(concert => (
          <Card key={concert.id} {...concert} />
        ))}
      </div>
    </div>
  )
}

export default App