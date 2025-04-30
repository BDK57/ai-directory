import React from 'react'
import HeroSection from '../../components/landingPage/herSection.jsx'
import AISection from '../../components/landingPage/alToolsSection.jsx'
import AIChatbot from '../../components/landingPage/aiChatbot.jsx'
import Articles from '../../components/landingPage/articles.jsx'
import Footer from '../../components/footer.jsx'

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <AISection/>
        <AIChatbot/>
        <Articles/>
        {/* <Footer/> */}
    </div>
  )
}

export default LandingPage