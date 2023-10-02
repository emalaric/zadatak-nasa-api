import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [explanation, setExplanation] = useState("")

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      if(res.status === 200)
      {
        setImageUrl(res.data.url)
        setTitle(res.data.title)
        setExplanation(res.data.explanation)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <h1>{title}</h1>
      <p>{explanation}</p>
      <img src={imageUrl} alt="opis_u_slucaju_da_slika_nije_ucitana" />
    </>
  )
}

export default App
