import { BasicHeaderTypes } from './BasicHeader.types'
import { IonHeader,IonTitle, IonIcon } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import './BasicHeader.scss'
import { useHistory } from 'react-router-dom';

export  function BasicHeader(props:BasicHeaderTypes.Props) {
    const {title, back} = props;
    const {goBack} = useHistory();
  return (
    <IonHeader className='header ion-padding'>
        {back && <IonIcon icon={chevronBack} onClick={goBack}/>}
        <IonTitle>
            {title}
        </IonTitle>
    </IonHeader>
  )
}
