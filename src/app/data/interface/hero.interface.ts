// Generated by https://quicktype.io

export interface Hero {
    id:              string;
    idHero:          string;
    superhero:       string;
    publisher:       Publisher;
    alterEgo:        string;
    firstAppearance: string;
    characters:      string;
    altImg:          string
}

export enum Publisher {
    DCComics = "DCComics",
    MarvelComics = "MarvelComics",
}
