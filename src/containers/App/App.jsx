import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';
import ReduxToastr from "react-redux-toastr";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      loaded: false,
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 500);
    });
  }

  

  render() {
    const alertOptions = {
      timeout: 3000,
      newestOnTop: false,
      position: "top-right",
      preventDuplicates: true,
      transitionIn: "fadeIn",
      transitionOut: "fadeOut",
      progressBar: true,
      closeOnToastrClick: true,
    };

    const { loaded, loading } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
        {/* <ReduxToastr
            getState={(state) => state.toastr} 
            {...alertOptions}
          /> */}
          <ScrollToTop>
            <Fragment>
              {!loaded
              && (
              <div className={`load${loading ? '' : ' loaded'}`}>
                <div className="load__icon-wrap">
                  <svg className="load__icon">
                    <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                  </svg>
                </div>
              </div>
              )
              }
              <div>
                <Router />
              </div>
            </Fragment>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
