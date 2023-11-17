import {getDatabase, set, ref} from "firebase/database"
import {v4 as uuidv4} from "uuid"

export class Channel {
    create(name: string){
        try {
            const db = getDatabase();
            const channelId = uuidv4();

            const channelRef = ref(db, `channel/${channelId}`)

            set(channelRef, {
                id: channelId,
                name,
            })
        } catch (error) {
             throw(error)
        }
    }
}