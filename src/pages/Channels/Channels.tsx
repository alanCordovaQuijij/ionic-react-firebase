import { useAuth } from "../../hooks"
import "./Channels.scss"
import { IonContent, IonFab, IonFabButton, IonIcon, IonSpinner } from "@ionic/react";
import {addOutline} from "ionicons/icons"
import { Link } from "react-router-dom";
import { ChannelRealTime } from "../../api";

import { useState, useEffect } from "react";
import { ChannelModel } from "../../models";
import { ListChannels } from "../../components";

const channelRtController = new ChannelRealTime();

export  function Channels() {

  const {username} = useAuth();
  const [channels, setChannels] = useState<[ChannelModel] | [] |null>([])
  
  console.log("ULTRA DATA:",channels)
  useEffect(() => {
    channelRtController.getAll(setChannels);
  }, []) 
  

  
  return (
    <IonContent className="channels-page ion-padding">
      <h2>Bienvenido, {username}!</h2>
      <h5>¿En que canal quieres entrar?</h5>

      {channels ? (
        
        <ListChannels channels={channels}/>
         
      ): (
      <div className="channels-page__loading">
        <IonSpinner/>
        <span>Obteniendo Canales</span>
      </div>

      )}



      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <Link to="/create-channel">
            <IonFabButton >
              <IonIcon icon={addOutline}/>
            </IonFabButton>
        </Link>
      </IonFab>
    </IonContent>
    
  )
}
