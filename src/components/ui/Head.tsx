import Image, { StaticImageData } from 'next/image'

const head = (
  img: StaticImageData,
  title: string,
  subtitle: string,
  id: number,
) => {
  return (
    <div className={`head__boxStr${id}`}>
      {/* <Image src={img} alt="head" className={`head__imgStr${id}`} /> */}
      <Image src={img} alt="head" className={`head__imgStr${id}`} />
      <h1 className={`head__titleStr${id}`}>
        {title} <p className={`head__subtitle str${id}`}>{subtitle}</p>
      </h1>
    </div>
  )
}

export default head
