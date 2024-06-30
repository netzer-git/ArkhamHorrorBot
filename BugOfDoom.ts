export type BagContent = {
    campaignName: string,
    p1: number,
    p0: number,
    m1: number,
    m2: number,
    m3: number,
    m4: number,
    m5: number,
    m6: number,
    m7: number,
    m8: number,
    skull: number,
    cultist: number,
    tablet: number,
    elder: number,
    star: number,
    chaos: number
}

export class ChaosBag {
    private bugContent: BagContent;
    private campaignName: string;
    private userName: string;

    constructor(userName: string, bagContent: BagContent, campaignName: string) {
        this.userName = userName;
        this.bugContent = bagContent;
        this.campaignName = campaignName;
    }


}

const saveBag = (): boolean => {
    return true;
}

const loadBag = (): BagContent | false => {
    return false;
}