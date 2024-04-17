import './styles/App.css'
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import Modal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('SignUp')
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <div>
      <Navbar
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen && (
        <Modal
          isSignedIn={isSignedIn}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsSignedIn={setIsSignedIn}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}

export default App
