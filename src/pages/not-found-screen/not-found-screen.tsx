import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>404 page not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--error">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404 page not found</h1>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
