export enum POKEMON_TYPES {
  NORMAL = 'normal',
  BUG =  'bug',
  POISON = 'poison',
  DARK = 'dark',
  DRAGON = 'dragon',
  ELECTRIC = 'electric',
  FAIRY = 'fairy',
  FIGHTING = 'fighting',
  FIRE = 'fire',
  FLYING = 'flying',
  GHOST = 'ghost',
  GRASS = 'grass',
  GROUND = 'ground',
  ICE = 'ice',
  PSYCHIC = 'psychic',
  ROCK = 'rock',
  STEEL = 'steel',
  WATER = 'water'
};

export const POKEMON_TYPE_COLORS: Record<POKEMON_TYPES, string> = {
  [POKEMON_TYPES.NORMAL]: '#AAA67F',
  [POKEMON_TYPES.BUG]: '#A7B723',
  [POKEMON_TYPES.POISON]: '#A43E9E',
  [POKEMON_TYPES.DARK]: '#75574C',
  [POKEMON_TYPES.DRAGON]: '#7037FF',
  [POKEMON_TYPES.ELECTRIC]: '#F9CF30',
  [POKEMON_TYPES.FAIRY]: '#E69EAC',
  [POKEMON_TYPES.FIGHTING]: '#C12239',
  [POKEMON_TYPES.FIRE]: '#F57D31',
  [POKEMON_TYPES.FLYING]: '#A891EC',
  [POKEMON_TYPES.GHOST]: '#70559B',
  [POKEMON_TYPES.GRASS]: '#74CB48',
  [POKEMON_TYPES.GROUND]: '#DEC16B',
  [POKEMON_TYPES.ICE]: '#9AD6DF',
  [POKEMON_TYPES.PSYCHIC]: '#FB5584',
  [POKEMON_TYPES.ROCK]: '#B69E31',
  [POKEMON_TYPES.STEEL]: '#B7B9D0',
  [POKEMON_TYPES.WATER]: '#6493EB',
};

export const PRIMARY_COLOR = '#DC0A2D'

export enum STAT_TYPES {
  HP = 'HP',
  ATK =  'ATK',
  DEF = 'DEF',
  SATK = 'SATK',
  SDEF = 'SDEF',
  SPD = 'SPD',
};
export const STAT_TYPES_2: { [key: string]: STAT_TYPES} = {
  'attack': STAT_TYPES.ATK,
  'defense': STAT_TYPES.DEF,
  'special-attack': STAT_TYPES.SATK,
  'special-defense': STAT_TYPES.SDEF,
  'speed': STAT_TYPES.SPD,
  'hp': STAT_TYPES.HP,
}

export const POKEMON_TYPE_STATS: Record<STAT_TYPES, string> = {
  [STAT_TYPES.HP]: 'HP',
  [STAT_TYPES.ATK]: 'ATK',
  [STAT_TYPES.DEF]: 'DEF',
  [STAT_TYPES.SATK]: 'SATK',
  [STAT_TYPES.SDEF]: 'SDEF',
  [STAT_TYPES.SPD]: 'SPD',
}