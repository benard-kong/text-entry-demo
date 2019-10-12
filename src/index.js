import React from 'react'
import ReactDOM from 'react-dom'
import './scss/styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

ReactDOM.render(
  <div>
    <h1>General Forms</h1>
    <section className="general-forms-section">
      <div className="text-entry">
        <h3 className="text-entry__label">Label</h3>
        <div className="text-entry__input-container">
          <input className="text-entry__input" type="text" />
        </div>
        <p className="text-entry__help-text">Helper text (if needed)</p>
      </div>
      <div className="text-entry">
        <h3 className="text-entry__label">Label</h3>
        <div className="text-entry__input-container">
          <input className="text-entry__input text-entry__input--active" type="text" />
        </div>
        <p className="text-entry__help-text">Helper text (if needed)</p>
      </div>
      <div className="text-entry">
        <h3 className="text-entry__label text-entry__label--disabled">Label</h3>
        <div className="text-entry__input-container">
          <input className="text-entry__input text-entry__input--disabled" type="text" disabled />
        </div>
        <p className="text-entry__help-text text-entry__help-text--disabled">Helper text (if needed)</p>
      </div>
      <div className="text-entry">
        <h3 className="text-entry__label">Label</h3>
        <div className="text-entry__input-container">
          <input className="text-entry__input text-entry__input--error" type="text" />
        </div>
        <p className="text-entry__help-text text-entry__help-text--error">Error message note size</p>
      </div>
    </section>
    <h1>Signup Forms</h1>
    <section className="signup-forms-section">
      <div className="text-entry">
        <h3 className="text-entry__label">Label</h3>
        <div className="text-entry__input-container">
          <div className="text-entry__image-container">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input className="text-entry__input text-entry__signup" type="text" placeholder="Text" />
        </div>
        <p className="text-entry__help-text">Helper text (if needed)</p>
      </div>
      <div className="text-entry">
        <h3 className="text-entry__label">Label</h3>
        <div className="text-entry__input-container">
          <div className="text-entry__image-container text-entry__image-container--active">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            className="text-entry__input text-entry__input--active text-entry__signup"
            type="text"
            placeholder="Text"
          />
        </div>
        <p className="text-entry__help-text">Helper text (if needed)</p>
      </div>
      <div className="text-entry">
        <h3 className="text-entry__label text-entry__label--disabled">Label</h3>
        <div className="text-entry__input-container">
          <div className="text-entry__image-container">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            className="text-entry__input text-entry__input--disabled text-entry__signup"
            type="text"
            placeholder="Text"
            disabled
          />
        </div>
        <p className="text-entry__help-text text-entry__help-text--disabled">Helper text (if needed)</p>
      </div>
      <div className="text-entry">
        <h3 className="text-entry__label">Label</h3>
        <div className="text-entry__input-container">
          <div className="text-entry__image-container text-entry__image-container--error">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            className="text-entry__input text-entry__input--error text-entry__signup"
            type="text"
            placeholder="Text"
          />
        </div>
        <p className="text-entry__help-text text-entry__help-text--error">Error message note size</p>
      </div>
    </section>
  </div>,
  document.getElementById('root')
)
