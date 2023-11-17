import { IonContent, IonInput, IonButton } from '@ionic/react'
import { BasicHeader } from '../../components'
import './CreateChannel.scss'
import { useFormik } from 'formik'
import { initailValues, validationSchema } from './CreateChannel.form'
import { Channel } from '../../api'
import { useHistory } from 'react-router-dom'

const  channelController = new Channel();

export  function CreateChannel() {

  const {goBack} = useHistory();

  const formik = useFormik({
    initialValues:initailValues(),
    validationSchema:validationSchema(),
    onSubmit: (formValue) => {
      try {
        channelController.create(formValue.name)
        goBack();
      } catch (error) {
        console.log(error);
      }
    }
  })

  return (
    <>
      <BasicHeader title='Crear Canal' back/>
      <IonContent className='create-channel-page ion-padding'>
        <h2>Crear un nuevo canal!</h2>

        <IonInput 
          placeholder='Nombre del canal' 
          onIonChange={(e) => formik.setFieldValue("name", e.detail.value)}
          />

        {formik.errors.name && (
          <span className='error'>{formik.errors.name}</span>
        )}

        <IonButton expand='block' onClick={()=> formik.handleSubmit()}>Crear canal</IonButton>
      </IonContent>
    </>
  )
}
