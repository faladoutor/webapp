import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginPage from '../pages/auth/login';
import ProcessosPage from '../pages/main/processos';
import DetalhesDoProcessoPage from '../pages/main/processos/detail';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" initial hideNavBar>
            <Scene key="login" component={LoginPage} title={'Login'} />
          </Scene>
          <Scene key="main">
            <Scene
              initial
              key="processos"
              title={'Processos'}
              component={ProcessosPage}
            />
            <Scene
              key="detalheDeProcessos"
              title={'Detalhe do processo'}
              component={DetalhesDoProcessoPage}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
