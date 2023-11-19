import { getDatabase, ref, set, onValue, remove } from "firebase/database"
import {v4 as uuid4 } from "uuid"
import { MessageModel } from "../models";


export class MessageRealTime {
    send(channelId: string, message:string, userId: string, username:string){
        try {
            const db = getDatabase();
            const messageId = uuid4();

            const messageRef = ref(db, `channels/${channelId}/messages/${messageId}`)
            set(messageRef, {
                id: messageId,
                message,
                userId,
                username,
                create_at:`${new Date()}`,
            })
        } catch (error) {
            throw error
        }
    }

    getAll(channelId:string, setMessages: (message: [MessageModel] | []) => void ){
         try {
            const db = getDatabase();
            const messageRef = ref(db, `channels/${channelId}/messages`);

            onValue(messageRef, (snapshot) => {
                const dataTemp = snapshot.val();

                if(!dataTemp){
                    setMessages([])
                }else{

                    const data:any = Object.values(dataTemp)
                    
                    const response: [MessageModel] = data.sort((a:any, b:any) => {
                        return (
                                    (new Date(a.create_at).getTime()) -
                                    (new Date(b.create_at).getTime())
                        ) 
                    })
 

                    setMessages(response)
                }   

            })
         } catch (error) {
            throw error
         }
    }

    delete(channelId: string, messageId: string){
        try {
            const db = getDatabase();
            const messageRef = ref(db, `channels/${channelId}/messages/${messageId}`)
            remove(messageRef)

        } catch (error) {
            throw error
        }
    }

    update (channelId: string, message: MessageModel, newMessage: string){
        try {
            const db = getDatabase();
            const messageRef = ref(db, `channels/${channelId}/messages/${message.id}`)

            set(messageRef,{
                ... message,
                message: newMessage
            })
        } catch (error) {
            throw error
        }
    }

}