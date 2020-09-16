import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../../../models/game-models/game.model';
import { PowerLevelsToProgressService } from '../../../../services/power-levels-to-progress.service';
import {ProgressBar} from '../../../../models/progress-bar.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {JoinGameModalComponent} from '../../../modals/join-game-modal/join-game-modal.component';
import {PlayerContextService} from '../../../../services/player-context.service';
import {CreatePlayerModalComponent} from '../../../modals/create-player-modal/create-player-modal.component';
import {CurrentPlayer} from '../../../../models/player-models/current-player.model';
import {Router} from '@angular/router';
import {Globals} from '../../../../common/globals';
import {Subscription} from 'rxjs';
import {SeatsCounterGraphDataModel} from '../../../../models/generic-models/seats-counter-graph-data.model';


@Component({
  selector: 'app-public-game',
  templateUrl: './public-game.component.html',
  styleUrls: ['./public-game.component.scss']
})
export class PublicGameComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  @Input() game: Game;
  public barData: Array<ProgressBar>;
  public seatsGraphData: SeatsCounterGraphDataModel;
  public isLoading = false;
  public changeText = false;


  constructor(
    private router: Router,
    private powerlevelToProgress: PowerLevelsToProgressService,
    private modalService: NgbModal,
    public playerContext: PlayerContextService
  ) { }

  ngOnInit(): void {
    this.barData = this.powerlevelToProgress.getProgressBarData(this.game.factions);
    this.seatsGraphData = new SeatsCounterGraphDataModel(this.game.availableSlots, this.game.usedSlots, true);
  }

  joinGame(game: Game): void{
    this.isLoading = true;
    this.subscription.add(this.playerContext.isLoggedIn().subscribe(isLoggedIn => {
        if (!isLoggedIn){
        const ref = this.modalService.open(CreatePlayerModalComponent);
        ref.componentInstance.currentPlayer = new CurrentPlayer();
        ref.result.then((yes) => {
            this.invokeJoinGameModal(game);
          },
          (cancel) => {});
      } else {
          this.subscription.add(
            this.playerContext.getCurrentPlayer().subscribe( currentPlayer => {
              if (currentPlayer.inGame.gid){
                this.router.navigate([Globals.gameLobbyPage]);
              } else {
                this.invokeJoinGameModal(game);
              }
            }, error => {
              console.log(error);
            })
          );
      }
    }, error => {
      console.log(error);
    }, () => {
      this.isLoading = false;
      this.subscription.unsubscribe();
    }));
  }

  invokeJoinGameModal(game: Game): void{
    const ref = this.modalService.open(JoinGameModalComponent);
    ref.componentInstance.game = game;
    ref.result.then((yes) => {
      if (yes === false){
        this.router.navigate([Globals.publicGamesPage]); // TODO: add page number
      } else if (yes === 'cancel') {
        // do nothing
      } else  {
        this.router.navigate([Globals.gameLobbyPage]);
      }
    },
    (cancel) => {
      // do nothing
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
