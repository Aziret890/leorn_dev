import Image, { StaticImageData } from 'next/image'

const Center = (
  title: string,
  subtitle: string,
  center: StaticImageData,
  pattern: StaticImageData,
  id: number,
) => {
  return (
    <div className={`centId${id}`}>
      <h2 className={`titleId${id}`}>{title}</h2>
      <div className={`boxId${id}`}>
        <Image src={center} alt="center" className={`centerId${id}`} />
        <Image src={pattern} alt="pattern2" className={`patternId${id}`} />
        <p className={`subtitleId${id}`}>{subtitle}</p>
      </div>
    </div>
  )
}

export default Center
