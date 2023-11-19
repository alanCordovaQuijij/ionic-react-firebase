import './ListChannels.scss'
import { ListChannelsTypes } from './ListChannels.types';
import {map, size} from "lodash"
import { IonIcon } from '@ionic/react';
import { chevronForwardCircleOutline } from 'ionicons/icons';
import {Link} from 'react-router-dom'

export  function ListChannels(props: ListChannelsTypes.Props) {

  const { channels} = props;

  return (

    <div className='list-channels'>
        {size(channels) === 0 ? (
          <p className='list-channels_no-channels'>Cargando canales...</p>
        ): (
          map(channels, (channel) => (
            <Link to = {`/channel/${channel.id}`}key={channel.id} className='list-channels_block'>
              <span>{channel.name}</span>
              <IonIcon
                 icon={chevronForwardCircleOutline}/>
            </Link>
          ))
        )}
    </div>
  );
}
