import { IonContent, IonInput, IonButton } from '@ionic/react'
import './Login.scss'
import { image } from '../../assets'
import { initialValues, validationSchema } from './Login.form'
import { useFormik } from 'formik'

export default function Login() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange:false,

    onSubmit:(formValue) => {
      console.log(formValue)
    }
  });

  return (
    <IonContent class='login-page ion-padding'>
      <div className='login-page_image'>
        <img src={image.welcome}/>
      </div>

      <h2>Entra y chatea</h2>

      <IonInput 
        placeholder='Nombre de usuario'
        onIonChange={(e) => formik.setFieldValue("username", e.detail.value)}
      />

        {formik.errors.username && (
           <span className='error'>{formik.errors.username}</span>

        )}
     
      <IonButton expand='block' onClick={() => formik.handleSubmit()}>Entrar</IonButton>
    </IonContent>
  )
}
