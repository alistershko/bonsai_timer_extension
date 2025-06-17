// Main App Component
//
// Purpose:
// - Main entry point for the extension popup UI
// - Composes all other components together
// - Manages app state and navigation
//
// Features:
// - Tab navigation between timer and collection views
// - Uses useTimer hook for timer functionality
// - Uses useTreeCollection hook for tree collection
// - Conditionally renders TimerForm or timer display based on state
// - Handles timer start and reset


// import { useState } from 'react'
import './App.css'

function App() {

  const helloAlert = async () => {
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
        <button onClick={() => helloAlert()}>
          Click me
        </button>
      </div>
    </>
  )
}

export default App
