'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Question({ faqList }: any) {
  const [selected, setSelected] = useState()

  return (
    <div className="ques">
      <div className="wrapper">
        <div></div>
        <div>
          <p className="wrap__subtitle">FAQ</p>
          <p className="wrap__title"> Вопросы клиентов</p>
        </div>

        {faqList.map((item: any, index: any) => {
          return (
            <div key={index} className="questionBlock">
              <div
                className="question"
                onClick={() => setSelected(index === selected ? false : index)}
              >
                <div className="questionText">{item.question}</div>
                <div>
                  {selected === index ? (
                    <FontAwesomeIcon icon={faMinus} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </div>
              </div>

              <div className="questionAnswer">
                {selected === index && <div>{item.answer}</div>}
              </div>
              <hr className="hr"></hr>
            </div>
          )
        })}
      </div>
    </div>
  )
}
