import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import Copy from './components/copy/Copy'
import CTA from './components/cta/CTA'
import Footer from './components/footer/Footer'
import GetLead from './components/getLead/GetLead'
import ImpactTitle from './components/impactTitle/ImpactTitle'
import { useEffect, useState } from 'react'

function InstagramBlocker() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast.success('Link copiado para a área de transferência!');
    } catch (err) {
      alert('Não foi possível copiar o link.')
      console.error('Erro ao copiar o link:', err)
    }
  }

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>Abra no navegador para continuar</h2>
      <p>
        O Instagram bloqueia recursos de segurança nesta página.
        <br />
        Para continuar, clique nos <b>três pontinhos</b> no canto superior direito e escolha <b>“Abrir no navegador”</b>.<br /><br />
        Ou, se preferir, copie o link clicando no botão abaixo e cole no seu navegador:
      </p>
      <br />
      <button
        onClick={handleCopy}
        style={{ padding: '10px 20px', fontSize: 16, marginBottom: 20 }}
      >
        Copiar link
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
