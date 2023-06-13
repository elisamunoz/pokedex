import { colors } from './styles/constants'

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
  [POKEMON_TYPES.NORMAL]: colors.normal,
  [POKEMON_TYPES.BUG]: colors.bug,
  [POKEMON_TYPES.POISON]: colors.poison,
  [POKEMON_TYPES.DARK]: colors.dark,
  [POKEMON_TYPES.DRAGON]: colors.dragon,
  [POKEMON_TYPES.ELECTRIC]: colors.electric,
  [POKEMON_TYPES.FAIRY]: colors.fairy,
  [POKEMON_TYPES.FIGHTING]: colors.fighting,
  [POKEMON_TYPES.FIRE]: colors.fire,
  [POKEMON_TYPES.FLYING]: colors.flying,
  [POKEMON_TYPES.GHOST]: colors.ghost,
  [POKEMON_TYPES.GRASS]: colors.grass,
  [POKEMON_TYPES.GROUND]: colors.ground,
  [POKEMON_TYPES.ICE]: colors.ice,
  [POKEMON_TYPES.PSYCHIC]: colors.psychic,
  [POKEMON_TYPES.ROCK]: colors.rock,
  [POKEMON_TYPES.STEEL]: colors.steel,
  [POKEMON_TYPES.WATER]: colors.water,
};

export const PRIMARY_COLOR = colors.primaryColor

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