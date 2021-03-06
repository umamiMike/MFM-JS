import { EmptyElement } from "./elements/EmptyElement";
import { DRegElement } from "./elements/DRegElement";
import { ResElement } from "./elements/ResElement";
import { WallElement } from "./elements/WallElement";
import { MasonElement } from "./elements/MasonElement";
import { ForkBombElement } from "./elements/ForkBombElement";
import { AntiForkBombElement } from "./elements/AntiForkBombElement";
import { SentryElement } from "./elements/SentryElement";
import { SeekerElement } from "./elements/SeekerElement";
import { UberElement } from "./elements/UberElement";
import { DataElement } from "./elements/DataElement";
import { ReducerElement } from "./elements/ReducerElement";
import { SuperMasonElement } from "./elements/SuperMasonElement";
import { SuperForkBombElement } from "./elements/SuperForkBomb";
import { SwapWormElement } from "./elements/SwapWormElement";
import { LoopWormElement } from "./elements/LoopWormElement";
import { LoopSeedElement } from "./elements/LoopSeedElement";
import { LoopNucleusElement } from "./elements/LoopNucleusElement";
import { StickyMembraneElement } from "./elements/StickyMembraneElement";
import { MembraneWallElement } from "./elements/MembraneWallElement";
import { MembraneDoorElement } from "./elements/MembraneDoorElement";

export interface IElementType {
  name: string;
  type: string;
  class: any;
  color?: number;
}

export class ElementTypes {
  static EMPTY: IElementType = { name: "EMPTY", type: "E", class: EmptyElement, color: 0x303030 };
  static DREG: IElementType = { name: "DREG", type: "D", class: DRegElement, color: 0xff2020 };
  static RES: IElementType = { name: "RES", type: "R", class: ResElement, color: 0x22d136 };
  static WALL: IElementType = { name: "WALL", type: "W", class: WallElement, color: 0x2020ff };
  static MASON: IElementType = { name: "MASON", type: "Ma", class: MasonElement, color: 0x20ffff };
  static SUPER_MASON: IElementType = { name: "SUPER MASON", type: "SMa", class: SuperMasonElement, color: 0x20cccc };
  static MEMBRANEWALL: IElementType = { name: "MEMBRANE WALL", type: "Mw", class: MembraneWallElement, color: 0x2020ff };
  static MEMBRANEDOOR: IElementType = { name: "MEMBRANE DOOR", type: "Md", class: MembraneDoorElement, color: 0x6060ff };
  static FORK_BOMB: IElementType = { name: "FORK BOMB", type: "Fb", class: ForkBombElement, color: 0xaa2020 };
  static SUPER_FORK_BOMB: IElementType = { name: "SUPER FORK BOMB", type: "SFb", class: SuperForkBombElement, color: 0xaa0000 };
  static UBER: IElementType = { name: "UBER", type: "Ub", class: UberElement, color: 0xffff00 };
  static DATA: IElementType = { name: "DATA", type: "Da", class: DataElement, color: 0xcccccc };
  static REDUCER: IElementType = { name: "REDUCER", type: "Re", class: ReducerElement, color: 0x00ffff };
  static ANTI_FORK_BOMB: IElementType = { name: "ANTI FORK BOMB", type: "Af", class: AntiForkBombElement, color: 0x7f7f20 };
  static SEEKER: IElementType = { name: "SEEKER", type: "Sk", class: SeekerElement, color: 0x999933 };
  static SENTRY: IElementType = { name: "SENTRY", type: "Se", class: SentryElement, color: 0x7f7fff };
  static SWAPWORM: IElementType = { name: "SWAP WORM", type: "Sw", class: SwapWormElement, color: 0xcc0066 };
  static LOOPWORM: IElementType = { name: "LOOP WORM", type: "Tw", class: LoopWormElement, color: 0xcc00cc };
  static LOOPSEED: IElementType = { name: "LOOP SEED", type: "Ls", class: LoopSeedElement, color: 0xFCC038 };
  static LOOPNUCLEUS: IElementType = { name: "LOOP NUCLEUS", type: "Ln", class: LoopNucleusElement, color: 0xcece24 }
  static STICKYMEMBRANE: IElementType = { name: "STICKY MEMBRANE", type: "Sm", class: StickyMembraneElement, color: 0x6D3D64 }

  static TYPES_MAP: Map<string, IElementType> = new Map<string, IElementType>()
    .set(ElementTypes.EMPTY.name, ElementTypes.EMPTY)
    .set(ElementTypes.DREG.name, ElementTypes.DREG)
    .set(ElementTypes.RES.name, ElementTypes.RES)
    .set(ElementTypes.WALL.name, ElementTypes.WALL)
    .set(ElementTypes.MASON.name, ElementTypes.MASON)
    .set(ElementTypes.MEMBRANEWALL.name, ElementTypes.MEMBRANEWALL)
    .set(ElementTypes.MEMBRANEDOOR.name, ElementTypes.MEMBRANEDOOR)
    .set(ElementTypes.SUPER_MASON.name, ElementTypes.SUPER_MASON)
    .set(ElementTypes.FORK_BOMB.name, ElementTypes.FORK_BOMB)
    .set(ElementTypes.SUPER_FORK_BOMB.name, ElementTypes.SUPER_FORK_BOMB)
    .set(ElementTypes.ANTI_FORK_BOMB.name, ElementTypes.ANTI_FORK_BOMB)
    .set(ElementTypes.SENTRY.name, ElementTypes.SENTRY)
    .set(ElementTypes.UBER.name, ElementTypes.UBER)
    .set(ElementTypes.DATA.name, ElementTypes.DATA)
    .set(ElementTypes.REDUCER.name, ElementTypes.REDUCER)
    .set(ElementTypes.SEEKER.name, ElementTypes.SEEKER)
    .set(ElementTypes.LOOPWORM.name, ElementTypes.LOOPWORM)
    .set(ElementTypes.SWAPWORM.name, ElementTypes.SWAPWORM)
    .set(ElementTypes.LOOPSEED.name, ElementTypes.LOOPSEED)
    .set(ElementTypes.LOOPNUCLEUS.name, ElementTypes.LOOPNUCLEUS)
    .set(ElementTypes.STICKYMEMBRANE.name, ElementTypes.STICKYMEMBRANE);


  static registerType(name: string, type: string, c: any, color?: number) {
    this.TYPES_MAP.set(name, { name, type, class: c, color });
  }
}
