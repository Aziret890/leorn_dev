'use client'
import React, { FC } from 'react'
import styles from './Questions.module.scss'
import Form from '@/components/ui/Form/Form'
import Button from '@/components/ui/Button/Button'
import FormSent from '@/components/ui/FormSent/FormSent'
import { useStore } from '@/store/contacts'

type Props = {
  title: string
}

const Questions: FC<Props> = ({ title }) => {
  const { isSend } = useStore()
  return (
    <section id="targetComponent" className={styles.questions}>
      <div className="container">
        {!isSend ? (
          <>
            <h2 className={styles.questions__title}>{title}</h2>
            <div className={styles.questions__wrapper}>
              <div className={styles.questions__inner}>
                <div>
                  <Button className="form__btn-green">Быстрый доступ</Button>

                  <h3 className={styles.questions__subtitle}>
                    Связаться с нами. Это просто.
                  </h3>
                  <h4 className={styles.questions__subtitle_2}>
                    ЗАКАЗ УСЛУГ, IT КОНСУЛЬТАЦИЯ
                  </h4>
                </div>

                <div>
                  <a
                    className={styles.questions__tel}
                    href="tel: +996705121928"
                  >
                    +996 705 121 928
                  </a>

                  <p className={styles.questions__email}>
                    E-mail:
                    <a href="liordev@gmail.com">liordev@gmail.com</a>
                  </p>
                </div>
              </div>
              <Form />
            </div>
            <div className={styles.questions__circle}></div>
          </>
        ) : (
          <FormSent />
        )}
      </div>
    </section>
  )
}

export default Questions
