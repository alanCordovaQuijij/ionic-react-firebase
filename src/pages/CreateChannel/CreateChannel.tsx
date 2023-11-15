import { IonContent, IonInput, IonButton } from '@ionic/react'
import { BasicHeader } from '../../components'
import './CreateChannel.scss'

export  function CreateChannel() {
  return (
    <>
      <BasicHeader title='Crear Canal' back/>
      <IonContent className='create-channel-page ion-padding'>
        <h2>Crear un nuevo canal!</h2>

        <IonInput placeholder='Nombre del canal'/>
        <span className='error'>Campo obligatorio</span>
        
        <IonButton expand='block'>Crear canal</IonButton>
      </IonContent>
    </>
  )
}
