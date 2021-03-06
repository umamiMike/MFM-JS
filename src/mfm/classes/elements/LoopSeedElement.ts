import { EventWindow } from "../Eventwindow";
import { Elem } from "../Elem";
import { ElementTypes, IElementType } from "../ElementTypes";
import { LoopWormElement } from "./LoopWormElement";
import { Site } from "../Site";
import { Atom } from "../Atom";

export class LoopSeedElement extends Elem {

  travelPath: number[] = [4, 3, 1, 2];
  nextTravel: number = 0;
  nextWall: number = 0;
  cycles: number = 0;


  constructor() {
    super(ElementTypes.LOOPSEED.name, ElementTypes.LOOPSEED.type);
  }


  makeLoopNode(ew: EventWindow, index: number, prev: number, next: number) {

    const loopNode: LoopWormElement = new LoopWormElement(0, prev, next);
    loopNode.isConnected = true;
    loopNode.expandCount = 1;

    const site: Site = ew.getSiteByIndex(index);
    const atom: Atom = new Atom();
    atom.setElement(loopNode);
    ew.origin.mutateSite(site, atom);

  }

  travel(ew: EventWindow, type: IElementType) {

    const toSite: Site = ew.getSiteByIndex(this.travelPath[this.nextTravel]);

    ew.origin.moveAtom(toSite, new Atom(type));

    this.nextTravel = this.nextTravel >= this.travelPath.length - 1 ? 0 : this.nextTravel + 1;


  }

  buildWall(ew: EventWindow, type: IElementType) {

    const northWall: number[] = [25, 15, 10, 17, 27];
    const eastWall: number[] = [27, 19, 12, 20, 28];
    const southWall: number[] = [28, 18, 11, 16, 26];
    const westWall: number[] = [26, 14, 9, 13, 25];
    const walls: number[][] = [northWall, eastWall, southWall, westWall];
    const walltoBuild: number[] = walls[this.nextWall];

    if (this.cycles < 8) {
      const northClearing: number[] = [5, 2, 7];
      const eastClearing: number[] = [7, 4, 8];
      const southClearing: number[] = [8, 3, 6];
      const westClearing: number[] = [6, 1, 5];

      const clearings: number[][] = [northClearing, eastClearing, southClearing, westClearing];
      const clearingToClear: number[] = clearings[this.nextWall];

      clearingToClear.forEach(siteNum => {
        const site: Site = ew.getSiteByIndex(siteNum);
        ew.origin.mutateSite(site, new Atom(ElementTypes.EMPTY));
      });
    }


    walltoBuild.forEach(siteNum => {
      const site: Site = ew.getSiteByIndex(siteNum);
      ew.origin.mutateSite(site, new Atom(type));
    })

    this.nextWall = this.nextWall >= walls.length - 1 ? 0 : this.nextWall + 1;
  }

  makeRoom(ew: EventWindow) {

  }



  makeLoop(ew: EventWindow) {

    const site: Site = ew.getSiteByIndex(2);
    ew.origin.mutateSite(site, new Atom(ElementTypes.LOOPWORM, [11]));

  }

  hasLoop(ew: EventWindow): boolean {

    const loops: Site[] = ew.getSites(EventWindow.ALLADJACENT, ElementTypes.LOOPWORM);
    return loops.length > 0 && loops[0] !== undefined;
  }



  exec(ew: EventWindow) {

    let innerType: IElementType = ElementTypes.WALL;
    let outerType: IElementType = ElementTypes.WALL;

    //make room
    if (this.cycles > 3 && this.cycles < 8) {

    }

    if (this.cycles === 8) {
      this.makeLoop(ew);
    }


    if (this.cycles > 8 && !this.hasLoop(ew)) {
      console.log("no loop");
      this.cycles = this.nextTravel;
    }

    if (this.cycles > 120) {

      outerType = ElementTypes.EMPTY;
      innerType = ElementTypes.LOOPNUCLEUS;

    }

    if (this.cycles > 123) {
      ew.origin.killSelf();
    }


    this.buildWall(ew, outerType);
    this.travel(ew, innerType);

    this.cycles++;








    // const innerLoop: number[][] = [
    //   //[5, 2, 7], [2, 7, 4], [7, 4, 8], [4, 8, 3], [8, 3, 6], [3, 6, 1], [6, 1, 5], [1, 5, 2]
    //   []
    // ]
    // const outerLoop: number[][] = [
    //   //prev, node, next
    //   [15, 10, 17],
    //   [10, 17, 27],
    //   [17, 27, 19],
    //   [27, 19, 35],
    //   [19, 35, 24],
    //   [35, 24, 36],
    //   [24, 36, 20],
    //   [36, 20, 28],
    //   [20, 28, 18],
    //   [28, 18, 11],
    //   [18, 11, 16],
    //   [11, 16, 26],
    //   [16, 26, 14],
    //   [26, 14, 30],
    //   [14, 30, 21],
    //   [30, 21, 29],
    //   [21, 29, 13],
    //   [29, 13, 25],
    //   [13, 25, 15],
    //   [25, 15, 10]
    // ]

    // const resSites: number[] = []

    // innerLoop.forEach(nodeDef => {
    //   this.makeLoopNode(ew, nodeDef[1], nodeDef[0], nodeDef[2]);
    // });

    // // outerLoop.forEach(nodeDef => {
    // //   this.makeLoopNode(ew, nodeDef[1], nodeDef[0], nodeDef[2]);
    // // });

    // resSites.forEach(siteNum => {
    //   ew.origin.mutateSite(ew.getSiteByIndex(siteNum), new Atom(ElementTypes.RES));
    // })

    // ew.origin.killSelf(new Atom(ElementTypes.RES));

    super.exec(ew);
  }
}
