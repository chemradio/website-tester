import React, { useState } from 'react'
import './ButtonsContent.scss'

const ButtonsContent = ({onClickOne, onClickTwo, titleOne, titleTwo, childrenOne, childrenTwo}) => {
  const [active, setActive] = useState(true)

  return (
    <div className="title-block">
      <div className="title-block__buttons">
        <div
          onClick={onClickOne}
          className={
            active ? 'title-block__buttons-item title-block__buttons-item--active' : 'title-block__buttons-item'
          }
        >
          <button type="button" onClick={() => setActive(true)} className="title-block__buttons-button">
            {titleOne}
            <label className="title-block__buttons-button-label">
                Видео-файл из скриншотов, сделанных из твоей ссылки. Можно добавить цитату и звуковую дорожку
            </label>
          </button>
        </div>
        <div
          onClick={onClickTwo}
          className={
            active ? 'title-block__buttons-item' : 'title-block__buttons-item title-block__buttons-item--active'
          }
        >
          <button type="button" onClick={() => setActive(false)} className="title-block__buttons-button">
            {titleTwo}
            <label className="title-block__buttons-button-label">
                Видео-файл из файлов, загруженных тобой
            </label>
          </button>
        </div>
      </div>
      <div className="title-block__children">
              {active
                  ? <div>{childrenOne}</div>
                  : <div>{childrenTwo}</div>
              }
          </div>
    </div>
  )
}

export default ButtonsContent
