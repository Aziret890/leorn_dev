import Info from '../../components/screens/Info'
import Command from '../../components/screens/Command'
import Head from '../../components/ui/Head'
import head from '../../assets/images/hero__bg.png'
import Question from '../../components/screens/Question'
import { fetchData } from '../../api/fetchData'
import Questions from '@/components/screens/Questions/Questions'

const page = async () => {
  const faqList = await fetchData('faq/')
  console.log(faqList)
  return (
    <>
      <div className="circle"></div>
      <div className="circle p2"></div>
      <div className="circle p3"></div>
      <div className="circle p4"></div>
      <div className="circle p5"></div>
      {Head(head, 'О СТУДИИ', 'LIOR DEV', 1)}
      <Info />
      <Command />
      <Question faqList={faqList} />
      <Questions title="Если у вас есть вопросы или вы хотите начать проект с нами" />
    </>
  )
}

export default page
