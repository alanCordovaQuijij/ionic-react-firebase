import './Channel.scss'
import { BasicHeader, InputChat, ListMessages } from '../../components'
import { IonContent, IonSpinner } from '@ionic/react'
import { useParams } from 'react-router-dom'
import { ChannelTypes } from './Channel.type'
import { Channel as ChannelController, MessageRealTime } from '../../api'
import { useState, useEffect, createRef } from 'react'
import { ChannelModel, MessageModel } from '../../models'


const channelController = new ChannelController();
const  messageRtController = new MessageRealTime();

export  function Channel() {
  const {id} = useParams<ChannelTypes.Params>(); 
  const [channel, setChannel] = useState<ChannelModel | null>(null)
  const [messages, setMessages] = useState<[MessageModel] | [] | null>(null)
  const contentRef = createRef<HTMLIonContentElement>();

  useEffect(() => {
   channelController.get(id, setChannel)
   messageRtController.getAll(id, setMessages)
  }, [id])
  
  useEffect(() => {
    contentRef.current?.scrollToBottom(contentRef.current.scrollHeight)
  }, [messages, contentRef])
  

  return (
    <>
      <BasicHeader title={channel?.name} back/>

      <IonContent className='channel-page ion-padding' ref={contentRef}>

        {messages ? (
          <div className='list-messages'>
            <ListMessages messages={messages}/>
          </div>
        ):(
          <div className='channel-page_loading'>
            <IonSpinner/>
            <span>Obteniendo mensajes</span>
          </div>
        )}
        
        <InputChat channelId= {id}/>
      </IonContent>
    </> 
    
    
  )
}
