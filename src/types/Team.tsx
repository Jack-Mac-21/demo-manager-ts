import { Player } from './Player'

export type Team = {
    name : String;
    wins : number; 
    losses : number;
    players? : Player[];
}