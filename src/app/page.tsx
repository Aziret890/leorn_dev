import Breaf from '@/components/screens/Breaf/Breaf'
import Comments from '@/components/screens/Comments/Comments'
import '../assets/styles/index.scss'
import Hero from '@/components/screens/Hero/Hero'
import Partners from '@/components/screens/Partners/Partners'
import Portfolio from '@/components/screens/Portfolio/Portfolio'
import Process from '@/components/screens/Process/Process'
import Questions from '@/components/screens/Questions/Questions'
import Stack from '@/components/screens/Stack/Stack'
import Studio from '@/components/screens/Studio/Studio'

export default function Home() {
  return (
    <main>
      <Hero />
      <Studio />
      <Process />
      <Questions title="Есть вопросы?  Давайте обсудим.." />
      <Stack />
      <Portfolio />
      <Partners />
      <Comments />
      <Breaf />
    </main>
  )
}
