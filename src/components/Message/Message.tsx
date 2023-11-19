import './Message.scss'
import {MessageType} from './Message.types'
import Avatar from 'react-avatar';
import classNames from 'classnames';
import { useAuth } from '../../hooks';
import { useIonAlert, useIonToast } from '@ionic/react';
import { text } from 'ionicons/icons';
import { openOptions } from './Message.alert';
import { useParams } from 'react-router-dom';

export  function Message(props: MessageType.Props) {

    const { message} = props;
    const {userId} = useAuth();
    const isMe = message.userId === userId;
    const [presentToast] = useIonToast();
    const [presentAlert] = useIonAlert();

    const params = useParams<MessageType.Params>();
    const channelId = params.id;

    const onOpenOptions = () => {
        if (isMe) {
            openOptions(presentAlert, channelId, message)
        }else{
            presentToast({
                message: "!Las opciones solo estan disponibles para tus mensajes",
                duration: 2500,
                position: "top",
                color: "danger",
            });
        }
    }

  return (
    <div className='message' onClick={onOpenOptions}>
        {!isMe &&
        <Avatar name={message.username} round size='40'/>    
        }
        
        <div className={classNames("message__text", {me: isMe})}>
            {isMe &&
                <span>{message.username}</span>
            }
            
            {message.message}
        </div>

        {isMe && (
            <Avatar name={message.username} round size='40'/>
        )}
    </div>
  )
}
