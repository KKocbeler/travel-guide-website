export interface City {
    id?: number;
    img?: string;
    name?: string;
    history?: string;
    desc?: string;
    placestogo?: PlaceToGo[];
    festivals?: Festival[];
    localcuisine?: LocalCuisine[];
    tips?: Tip[];
    legend?: Legend;
    interestingtips?: InterestingTip[];
}

export interface PlaceToGo {
    name: string;
    history: string;
    img: string;
}
  
export interface Festival {
    name: string;
    description: string;
    features: string[];
    date?: string;
}
  
export interface LocalCuisine {
    name: string;
    description: string;
    img: string;
}
  
export interface Tip {
    id: number;
    name: string;
    tip: string;
}
  
export interface Legend {
    title: string;
    story: string;
}

export interface InterestingTip {
    name: string;
    info: string;
}