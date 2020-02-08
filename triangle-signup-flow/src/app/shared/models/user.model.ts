import {Deserializable} from "./deserializable.model";

export class UserModel implements Deserializable{
    userName:string;
    email:string;
    password:string;
    displayName:string;
    firstName:string;
    lastName:string;
    nickName:string;
    website:string;
    bio:string;
    jabber:string;
    aolIm:string;
    yahooIm:string;
    deserialize(data: any) {
        Object.assign(this, data);
        return this;
      }
}