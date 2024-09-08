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

interface PlaceToGo {
    name: string;
    history: string;
    img: string;
}
  
interface Festival {
    name: string;
    description: string;
    features: string[];
    date?: string;
}
  
interface LocalCuisine {
    name: string;
    description: string;
    img: string;
}
  
interface Tip {
    id: number;
    name: string;
    tip: string;
}
  
interface Legend {
    title: string;
    story: string;
}

interface InterestingTip {
    name: string;
    info: string;
}