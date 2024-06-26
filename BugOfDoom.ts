export type BugContent = {
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

export class BugOfDoom {
    private bugContent: BugContent;
    private campaignName: string;
    private userName: string;

    constructor(userName: string, bugContent: BugContent, campaignName: string) {
        this.userName = userName;
        this.bugContent = bugContent;
        this.campaignName = campaignName;
    }


}

const saveBug = (): boolean => {
    return true;
}

const loadBug = (): BugContent | false => {
    return false;
}