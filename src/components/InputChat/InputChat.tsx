import './InputChat.scss'
import { InputChatTypes } from './InputChat.types'
import { IonInput, IonIcon, IonButton } from '@ionic/react';
import { send } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { initialValues, validationSchema } from './InputChat.form';
import { useFormik } from 'formik';
import { MessageRealTime } from '../../api';
import { useAuth } from '../../hooks';

const messageRtController = new MessageRealTime();

export  function InputChat(props: InputChatTypes.Props) {
    const {channelId} = props;
    const [keyboardHeight, setkeyboardHeight] = useState(0);
    const {userId, username} = useAuth();

    useEffect(() => {
      window.addEventListener("ionKeyboardDidShow", (event: any) => {
        const {keyboardHeight} = event.detail;
        //console.log("HEIGT:",keyboardHeight)
        setkeyboardHeight(keyboardHeight - 15);
      });

      window.addEventListener("ionKeyboardDidHide", () => {
        setkeyboardHeight(0);
      });

    }, [])
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (formValue) => {
            try {
                
                messageRtController.send(
                    channelId, 
                    formValue.message, 
                    userId,
                    username
                    )
                formik.handleReset(null);
            } catch (error) {
                console.log(error);
            }
        }
    });

  return (
    <div className='input-chat' 
      style={{transform: `tralateY(-${keyboardHeight}px)`}}
      >
         <IonInput 
            placeholder='Tu mensaje...' 
            value={formik.values.message} 
            onIonChange={(event) => formik.setFieldValue("message", event.detail.value)}
        />
         <IonIcon icon={send}  onClick={() => formik.handleSubmit()}/>
    </div>
  )
}
  