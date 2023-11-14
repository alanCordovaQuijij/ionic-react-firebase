import { Route } from 'react-router-dom';
import { useAuth } from '../hooks'
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router'
import { Channels, Channel, CreateChannel } from '../pages';

export  function AuthRoutes() {

 // const {userId, username} = useAuth();

  return (
    <div>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path='/'>
              <Channels/>
            </Route>

            <Route exact path='/create-channel'>
              <CreateChannel/>
            </Route>

            <Route exact path='/channel/:id'>
              <Channel/>
            </Route>

          </IonRouterOutlet>
        </IonReactRouter>        
    </div>
  )
}
