import { ToastContainer } from 'react-toastify'
import './App.css'
import Copy from './components/copy/Copy'
import CTA from './components/cta/CTA'
import Footer from './components/footer/Footer'
import GetLead from './components/getLead/GetLead'
import ImpactTitle from './components/impactTitle/ImpactTitle'

function App() {
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
