import React from 'react';
import '../stylesheets/_main.scss';

class Main extends React.Component {
  render() {
    return (
      <main class='page__main'>
        <section class='imagen'>
          <div>
            <button href='#' class='button__reset js-reset-button'>
              <img class='img-button' src='./assets/images/basura.svg' alt='' />
              <p class='button__reset--word'>reset</p>
            </button>

            <div class='card'>
              <div class='card__top'>
                <div class='js-square card__top__square-color'></div>
                <div class='card__top__title'>
                  <div class='js-name-print card__top__title__name'>
                    nombre apellido
                  </div>
                  <div class='js-role card__top__title__role'>
                    Front-end developer
                  </div>
                </div>
              </div>
              <div
                class='card__photo js-background js__profile-image'
                id='photo'
              ></div>
              <div class='card__bottom'>
                <ul class='card__bottom__list'>
                  <li class='card__bottom__list__li js-border js-background-phone'>
                    <a href='' target='_blank' class='js-phone-icon'>
                      <i class='js-icon icon fas fa-mobile-alt'></i>
                    </a>
                  </li>
                  <li class='js-border js-background-email card__bottom__list__li'>
                    <a href='mailto:' target='_blank' class='js-email-icon'>
                      <i class='js-icon icon far fa-envelope'></i>
                    </a>
                  </li>
                  <li class='js-border js-background-linkedin card__bottom__list__li'>
                    <a
                      href=''
                      target='_blank'
                      class='js-linkedin-email js-linkedin-print'
                    >
                      <i class='js-icon icon fab fa-linkedin-in'></i>
                    </a>
                  </li>
                  <li class='js-border js-background-github card__bottom__list__li'>
                    <a href='' target='_blank' class='js-github-print'>
                      <i class='js-icon icon fab fa-github-alt'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
