import { ToastContainer } from 'react-toastify'
import './App.css'
import Copy from './components/copy/Copy'
import CTA from './components/cta/CTA'
import Footer from './components/footer/Footer'
import GetLead from './components/getLead/GetLead'
import ImpactTitle from './components/impactTitle/ImpactTitle'
import { useEffect, useState } from 'react'

function InstagramBlocker() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>Abra no navegador para continuar</h2>
      <p>O Instagram bloqueia recursos de segurança nesta página.</p>
      <button
        onClick={() => window.location.href = 'https://www.seusite.com'}
        style={{ padding: '10px 20px', fontSize: 16 }}
      >
        Abrir no navegador
      </button>
    </div>
  )
}

function App() {
  const [isInstagram, setIsInstagram] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera
    setIsInstagram(ua.includes('Instagram'))
  }, [])

  if (isInstagram) {
    return <InstagramBlocker />
  }
  return (
    <>
      <ImpactTitle />
      <Copy />
      <CTA />
      <GetLead />
      <Footer /> 
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
