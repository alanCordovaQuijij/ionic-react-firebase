import { MessageModel } from "../../models";

export namespace MessageType {
    export type Props = {
        message: MessageModel;
    };

    export type Params = {
        id: string;
    }
}