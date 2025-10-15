import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
    <SpeedInsights />
    </>
  )
}

export default App;