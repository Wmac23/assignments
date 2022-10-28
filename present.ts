import { PresentType } from "./assignment";


export class Present {
    name: string;
    weight: string;
    presentType: PresentType;


    constructor(pName: string, pWeight: string, presentType: PresentType) {
        this.name = pName;
        this.weight = pWeight;
        this.presentType = presentType;
}
print(): void {
    console.log(this.name + " " + this.weight + " " + this.presentType);
}
}

