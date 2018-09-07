import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['../app.component.css']
})
export class ServersComponent {
  displayedColumns: string[] = ['mod', 'link'];
  requiredMods = REQUIRED_MODS_DATA;
  optionalMods = OPTIONAL_MODS_DATA;
}

export interface Mod {
  mod: string;
  link: string;
}

const REQUIRED_MODS_DATA: Mod[] = [
  { mod: 'Steam Workshop Collection', link: '899270604' },
  { mod: 'Exile Mod', link: '1487484880' },
  { mod: 'Chernarus Isles', link: '884988618' },
  { mod: 'CUP Terrains - Core', link: '583496184' },
  { mod: 'CUP Terrains - Maps:', link: '583544987' },
  { mod: 'Open Chernarus Project', link: '786777307' },
  { mod: 'NI Arms Complete', link: '665702172' },
  { mod: 'RHS AFRF', link: '843425103' },
  { mod: 'RHS USAF', link: '843577117' },
  { mod: 'RHS GREF', link: '843593391' },
  { mod: 'RHS SAF', link: '843632231' },
  { mod: 'Specialist Military Arms (SMA)', link: '699630614' },
  { mod: 'CBA_A3', link: '450814997' },
  { mod: 'TRYK\'s Multi-play Uniforms', link: '779520435' },
  { mod: 'Temp fix for Exile Miniguns', link: '720335480' },
  { mod: 'Caucasus Insurgency', link: '848358281' },
  { mod: 'Extended Items', link: '897168981' },
  { mod: 'Extended Base Mod', link: '647753401' }
];

const OPTIONAL_MODS_DATA: Mod[] = [
  { mod: 'Enhanced Movement', link: '333310405' },
  { mod: 'JSRS Soundmod', link: '861133494' },
  { mod: 'Advanced Urban Rappelling', link: '730310357' }
];
