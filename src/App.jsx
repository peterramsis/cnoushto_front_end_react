import { useState } from 'react'

import './App.css'
import HeaderApp from './component/layouts/header/header_app';
import FooterApp from './component/layouts/footer/footer_app';
function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="all" style={{ direction: "rtl" }}>
      <HeaderApp />
      <FooterApp />
    </section>
  )
}

export default App
