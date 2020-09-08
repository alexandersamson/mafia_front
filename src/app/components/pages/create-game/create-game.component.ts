import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PlayerContextService} from '../../../services/player-context.service';
import {CreatePlayerModalComponent} from '../../modals/create-player-modal/create-player-modal.component';
import {CurrentPlayer} from '../../../models/player-models/current-player.model';
import {Globals} from '../../../common/globals';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit, OnDestroy {
  private subscription =  new Subscription();
  public isLoading = false;

  constructor(private modalService: NgbModal,
              private router: Router,
              public playerContext: PlayerContextService) { }

  ngOnInit(): void {
    this.subscription.add(this.playerContext.isLoggedIn().subscribe(isLoggedIn => {
      if (!isLoggedIn){
        this.isLoading = true;
        const ref = this.modalService.open(CreatePlayerModalComponent);
        ref.componentInstance.currentPlayer = new CurrentPlayer();
        ref.result.then((yes) => {
            this.isLoading = false;
          },
          (cancel) => {});
      } else {
        this.subscription.add(
          this.playerContext.getCurrentPlayer().subscribe( currentPlayer => {
            if (currentPlayer.inGame.gid){
              this.router.navigate([Globals.gameLobbyPage]);
            } else {
              this.isLoading = false;
            }
          }, error => {
            console.log(error);
          })
        );
      }
    }, error => {
      console.log(error);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
