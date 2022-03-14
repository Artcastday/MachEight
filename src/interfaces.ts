export interface Player {
    first_name: String;
    h_in: String;
    h_meters: String;
    last_name: String;
};

export interface ArgsFormatNames {
    playerA: Player;
    playerB: Player;
}

export interface ArgsFilter {
    arr: Player[];
    input: String;
}