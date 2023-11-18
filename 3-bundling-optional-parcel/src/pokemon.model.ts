export interface SpriteModel{
    front_default: string;
}
export interface PokemonModel{
    name:string;
    sprintes: SpriteModel;
    height: number;
    weight: number;

}