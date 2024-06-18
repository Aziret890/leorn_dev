import Development from '@/components/screens/Development/Development'
import HeroService from '@/components/screens/HeroService/HeroService'
import Questions from '@/components/screens/Questions/Questions'
import Services from '@/components/screens/Services/Services'
import Head from '@/components/ui/Head'
import '../../assets/styles/components/about/head.scss'
// import head from '@/assets/images/bg_sevice_main.png'
import head from '/images/bg_sevice_main.png'

const page = () => {
  return (
    <main>
      <div className={`head__boxStr${1}`}>
        <img
          src={'/images/bg_sevice_main.png'}
          alt="head"
          className={`head__imgStr${1}`}
        />
        <h1 className={`head__titleStr${1}`}>
          ЧТО МЫ, МОЖЕМ ПРЕДЛОЖИТЬ ?
          {/* <p className={`head__subtitle str${1}`}>{subtitle}</p> */}
        </h1>
      </div>
      {/* {Head(head, 'ЧТО МЫ', 'МОЖЕМ ПРЕДЛОЖИТЬ ?', 1)} */}
      <Services />
      <Development />
      <Questions title="" />
    </main>
  )
}

export default page
