import './Channel.scss'
import { BasicHeader } from '../../components'
import { IonContent, IonSpinner } from '@ionic/react'

export  function Channel() {
  return (
    <>
      <BasicHeader title='Chat' back/>

      <IonContent className='channel-page ion-padding'>
        <span>Listado de mensajes</span>
        
      </IonContent>
    </>
    
    
  )
}
