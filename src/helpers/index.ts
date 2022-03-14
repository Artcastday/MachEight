import { ArgsFilter, ArgsFormatNames, Player } from "../interfaces";

const formatNames = ({ playerA, playerB }: ArgsFormatNames) => [playerA.first_name, playerB.first_name].sort().join();

export default ({ arr, input }: ArgsFilter) => {
  const playerHeightSet = new Set<number>(arr.map((item: Player) => Number(item.h_in)));
  const alreadyPaired: string[] = [], alreadyPairedNum:string[] = [], players = [];
  for (const height of playerHeightSet) {
    const diff = Number(input) - height;
    const numsPaired = [height, diff].sort().join();
    if ((playerHeightSet.has(diff) || height === diff) && !alreadyPairedNum.includes(numsPaired)) {
      const filterPlayerA = arr.filter(item => Number(item.h_in) ===  height);
      const filterPlayerB = arr.filter(item => Number(item.h_in) ===  diff);
      alreadyPairedNum.push(numsPaired);
      for (const playerA of filterPlayerA) {
        for (const playerB of filterPlayerB) {
          const names = formatNames({ playerA, playerB });
          if (playerA.first_name !== playerB.first_name && !alreadyPaired.includes(names)) {
            players.push([playerA, playerB]);
            alreadyPaired.push(names);
          }
        }
      }
    }
  }
  return players;
}