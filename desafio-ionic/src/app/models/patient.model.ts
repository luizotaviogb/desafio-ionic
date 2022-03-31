import { Serializable } from "./serializable.model"

export class Patient extends Serializable {
    public gender: string = null
    public name: any = null
    public location: any = null
    public email: string = null
    public dob: any = null
    public phone: any = null
    public id: any = null
    public picture: any = null
    public nat: string = null

    constructor(data: any = {}) {
        super();
        this.serialize(data);
    }
    get http_data() {
        return {
            gender: this.gender,
            name: this.location,
            email: this.email,
            dob: this.dob,
            phone: this.phone,
            id: this.id,
            picture: this.picture,
            nat: this.nat
        }
    }

}