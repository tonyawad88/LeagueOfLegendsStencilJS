class Heroes{

    championsUrl:string = "https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json";
    imagesUrlPrefix:string = "https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/";

    heroes:Array<Champion> = new Array<Champion>();

    constructor(){
    }

    async getHeroes(){
        if(this.heroes.length > 0){
            return this.heroes;
        }
        var url = this.championsUrl;
        var data = await fetch(url).then(res=>{return res.json();}).catch(error=>console.error(error));
        console.log(data);
        var tempHeroes = new Array<Champion>();
        for(var key in data.data){
            tempHeroes.push(data.data[key]);
        }
        this.heroes = tempHeroes;
        return tempHeroes;
    }
}
export const HeroesData = new Heroes();

export interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: Info;
    image: Image;
    tags: string[];
    partype: string;
    stats: Stats;
}
export interface Stats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedoffset: number;
    attackspeedperlevel: number;
}
export interface Info {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}
export interface Image {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}