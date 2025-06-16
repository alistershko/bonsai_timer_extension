// import { useState } from 'react'
import './App.css'

function App() {

  const onclick = async () => {
    const [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        alert("Hello from Bonsai!");
      },
    });
  }

  return (
    <>
      <h1>Bonsai Timer</h1>
      <div className="card">
        <button onClick={() => onclick()}>
          Click me
        </button>
      </div>
    </>
  )
}

export default App
