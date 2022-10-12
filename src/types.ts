

export interface Event {
    _id:        string;
    title:      string;
    flyerFront: string;
    attending:  number;
    date:       string;
    startTime:  string;
    endTime:    string;
    contentUrl: string;
    venue:      Venue;
    pick:       Pick;
    artists:    Artist[];
    city:       string;
    country:    string;
    private:    boolean;
    __v:        number;
    inCart?:     boolean;
}

export interface Artist {
    id:   string;
    name: string;
    _id:  ID;
}

export interface ID {
    $oid: string;
}

export interface Pick {
    id:    string;
    blurb: string;
}

export interface Venue {
    id:         string;
    name:       string;
    contentUrl: string;
    live:       boolean;
    direction:  string;
}