import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  winnerCombination: any;
  public gameGrid = <Array<Object>>[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  calculateWinner = (data) => {
    const playedGameGrid = data.playedGameGrid;
    const movesPlayed = data.movesPlayed;
    let winner = null;
    /* checking the winner */
    this.winnerCombination.forEach((singleCombination) => {
      if (playedGameGrid[singleCombination[0]] !== undefined && playedGameGrid[singleCombination[0]] !== null &&
        playedGameGrid[singleCombination[1]] !== undefined && playedGameGrid[singleCombination[1]] !== null &&
        playedGameGrid[singleCombination[2]] !== undefined && playedGameGrid[singleCombination[2]] !== null &&
        playedGameGrid[singleCombination[0]]['player'] === playedGameGrid[singleCombination[1]]['player'] &&
        playedGameGrid[singleCombination[1]]['player'] === playedGameGrid[singleCombination[2]]['player']
      ) {
        winner = playedGameGrid[singleCombination[0]]['player'] + ' Wins !';
      } else if (movesPlayed === 9) {
        winner = 'Game Draw';
      }
      return false;
    });
    let result: {};
    if (winner === null) {
      result = {
        'position': data.position,
        'playedText': data.playedText,
        'winner': null
      };
    } else {
      result = {
        'position': data.position,
        'playedText': data.playedText,
        'winner': winner
      };
    }
    return result;
  }
  constructor() {
    this.winnerCombination = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
  }
}
