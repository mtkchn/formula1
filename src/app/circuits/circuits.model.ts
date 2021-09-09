
export interface Circuit {
    id: number;
    name: string;
    image: string;
    competition: Competition;
    length: string;
    capacity: number;
    opened: number;
    owner: string;
}


export interface Competition {
    id: number;
    name: string;
    location: Location;
}

export interface Location {
    country: string;
    city: Location;
}

export interface Race {
    id: number;
    competition: Competition;
    circuit: Circuit;
    season: number;
    type: string;
    laps: Laps;
    distance: string;
    timezone: string;
    date: Date;
    weather: string;
    status: string;

}
export interface Laps {
    current: string
    total: number
}

export interface Driver {
    id: number;
    name: string;
    image: string;
    nationality: string;
    birthdate: string;
    teams: {
        season: number;
        team: Team;
    }
}

export interface Team {
    id: number;
    name: string;
    logo: string;
}
