import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/game-service.service';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {
  private gameGrid = <Array<Object>>[];
  private playedGameGrid = <Array<Object>>[];
  private movesPlayed = <number>0;
  private displayPlayerTurn = <Boolean>true;
  private myTurn = <Boolean>true;
  private whoWillStart = <Boolean>true;
  private playedText = <string>'';
  private whoseTurn = 'X';
  renderPlayedText(number) {
    if (this.playedGameGrid[number] === undefined) {
    return '';
    } else {
    this.playedText = this.playedGameGrid[number]['player'];
    return this.playedText;
    }
    }

    resetGame() {
      this.playedGameGrid = [];
      this.gameGrid = [];
      this.gameGrid = this.gs.gameGrid;
      this.movesPlayed = 0;
      if (this.whoWillStart) {
      this.myTurn = true;
      this.displayPlayerTurn = true;
      this.whoseTurn = 'X';
      } else {
      this.displayPlayerTurn = true;
      this.whoseTurn = 'O';
      }
      }
  constructor(private gs: GameServiceService ) {
      this.gameGrid =  gs.gameGrid;
  }

  ngOnInit() {
  }


  play(number) {
    if (!this.myTurn) {
    return;
    }
    this.movesPlayed += 1;
    this.playedGameGrid[number] = {
    position: number,
    player: this.whoseTurn
    };
    const result: {} = this.gs.calculateWinner({
    'playedText': this.whoseTurn,
    'position' : number,
    'playedGameGrid': this.playedGameGrid,
    'movesPlayed' : this.movesPlayed
    });
    if (result) {
      this.opponentMove(result);
    }
    }

    opponentMove(params) {
      this.displayPlayerTurn = !this.displayPlayerTurn ? true : false;
      if (params['winner'] ===  null) {
        this.myTurn = false;
        this.whoWillStart = false;
        this.whoseTurn === 'O' ? this.whoseTurn = 'X' : this.whoseTurn = 'O';
      this.playedGameGrid[params['position']] = {
      position: params['position'],
      player: params['playedText']
      };
      this.myTurn = true;
      } else {
      alert(params['winner']);
      this.resetGame();
      }
      }


}
