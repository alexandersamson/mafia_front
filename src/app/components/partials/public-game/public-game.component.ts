import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../../models/game.model';
import { PowerLevelsToProgressService } from '../../../services/power-levels-to-progress.service';
import {ProgressBar} from '../../../models/progress-bar.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {JoinGameModalComponent} from '../../modals/join-game-modal/join-game-modal.component';
import {PlayerContextService} from '../../../services/player-context.service';
import {CreatePlayerModalComponent} from '../../modals/create-player-modal/create-player-modal.component';
import {CurrentPlayer} from '../../../models/current-player.model';
import {Router} from '@angular/router';
import {Globals} from '../../../common/globals';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-public-game',
  templateUrl: './public-game.component.html',
  styleUrls: ['./public-game.component.scss']
})
export class PublicGameComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  @Input() game: Game;
  public barData: Array<ProgressBar>;
  public isLoading = false;

  constructor(
    private router: Router,
    private powerlevelToProgress: PowerLevelsToProgressService,
    private modalService: NgbModal,
    private playerContext: PlayerContextService
  ) { }

  ngOnInit(): void {
    this.barData = this.powerlevelToProgress.getProgressBarData(this.game.factions);
  }

  joinGame(game: Game): void{
    this.isLoading = true;
    this.subscription.add(this.playerContext.checkForPlayerLogin().subscribe(packet => {
        if (packet == null || !packet.data[0].hasOwnProperty('name')){
        const ref = this.modalService.open(CreatePlayerModalComponent);
        ref.componentInstance.currentPlayer = new CurrentPlayer();
        ref.result.then((yes) => {
            this.invokeJoinGameModal(game);
          },
          (cancel) => {});
      } else {
        this.invokeJoinGameModal(game);
      }
    }, error => {
      console.log(error);
    }, () => {
      this.isLoading = false;
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
