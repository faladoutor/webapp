import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginPage from '../pages/auth/login';
import ProcessosPage from '../pages/main/processos';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" initial hideNavBar>
            <Scene initial key="login" component={LoginPage} title={'Login'} />
          </Scene>
          <Scene key="main">
            <Scene
              key="processos"
              title={'Listagem de processos'}
              component={ProcessosPage}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
