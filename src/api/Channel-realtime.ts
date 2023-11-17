import { getDatabase, ref, onValue  } from "firebase/database"
import { ChannelModel } from "../models";


export class ChannelRealTime{

    getAll(setChannel: (channels: [ChannelModel] | [] ) => void ){
        try {
          const db = getDatabase();
          const channelRef = ref(db, "channel");
          
          onValue(channelRef, (snapshot) => {
            const data = snapshot.val();

            console.log(JSON.stringify(data));
            
            if(!data) setChannel([])
            else setChannel(data);

          } )
        } catch (error) {
            throw error
        }
    }



}              