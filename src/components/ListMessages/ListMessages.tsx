import { ListMessagesTypes } from "./ListMessages.types"
import { map, size } from "lodash";
import './ListMessages.scss'
import {Message} from '../Message'

export  function ListMessages(props: ListMessagesTypes.Props) {
 
    const {messages} = props;

  return (
    <div className="List-messages">
        {size(messages) === 0 ? (
            <p className="list-messages__no-messages">
                No hay mensajes, envía el primero cbzvrg!
            </p>
        ):(
            map(messages, (message) => (
                <div>
                    <Message key={message.id} message = {message}/>
                </div>)
            )
        )
        }
    </div>
  )
}
