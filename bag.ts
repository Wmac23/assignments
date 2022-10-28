import { BagType, PresentType } from "./assignment";

export class Bag{
maxWeight: number;
bagType: BagType;
presents: PresentType[];

constructor(bWeight: number, bType: BagType,) {
    this.maxWeight = bWeight;
    this.bagType = bType;
}
}
