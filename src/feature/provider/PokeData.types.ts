// Generated by https://quicktype.io

export interface PokemonDto {
  abilities: Ability[];
  base_experience: number;
  id: number;
  moves: Move[];
  name: string;
  order: number;
  species: Label;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {
  ability: Label;
  is_hidden: boolean;
  slot: number;
}

interface Label {
  name: string;
  url: string;
}

interface Move {
  move: Label;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Label;
  version_group: Label;
}

interface Sprites {
  back_default: string;
  front_default: string;
}

interface Stat {
  base_stat: number;
  stat: Label;
}

interface Type {
  slot: number;
  type: Label;
}
