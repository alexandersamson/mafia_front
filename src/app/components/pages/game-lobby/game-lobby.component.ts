import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, pipe, Subscription} from 'rxjs';
import {PlayerContextService} from '../../../services/player-context.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.scss']
})
export class GameLobbyComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public game: any;
  public isHost: any;
  public role: any;
  public faction: any;
  public abilities: [];
  public inventory: [];
  public isAlive: boolean;
  public isAtHome: boolean;
  public lastWill: string;
  public knowsOwnRole: boolean;
  public hasRoleExposed: boolean;
  public hasInventoryExposed: boolean;
  public playersInGame: [];
  public rolesInGame: [];
  public visited: [];
  public visitors: [];
  public gameEvents: [];


  constructor(private playerContext: PlayerContextService) { }

  ngOnInit(): void {
    this.startInterval();
  }

  public startInterval(): void{
   this.subscription.add(interval(1500).pipe(
      mergeMap(() => this.playerContext.getPlayerPackage()
    )).subscribe(pack => {
        if (pack.data){
          if (pack.data[0]){
            const data: any = pack.data[0];
            data.game ? this.game = data.game : null;
            data.role ? this.role = data.role : null;
            data.isHost ? this.isHost = data.isHost : null;
            data.faction ? this.faction = data.faction : null;
            data.rolesInGame ? this.rolesInGame = data.rolesInGame : null;
            data.playersInGame ? this.playersInGame = data.playersInGame : null;
            data.abilities ? this.abilities = data.abilities : null;
            data.isAlive ? this.isAlive = data.isAlive : null;
            data.isAtHome ? this.isAtHome = data.isAtHome : null;
            data.lastWill ? this.lastWill = data.lastWill : null;
            data.inventory ? this.inventory = data.inventory : null;
            data.hasRoleExposed ? this.hasRoleExposed = data.hasRoleExposed : null;
            data.hasInventoryExposed ? this.hasInventoryExposed = data.hasInventoryExposed : null;
            data.knowsOwnRole ? this.knowsOwnRole = data.knowsOwnRole : null;
            data.visited ? this.visited = data.visited : null;
            data.visitors ? this.visitors = data.visitors : null;
            data.gameEvents ? this.gameEvents = data.gameEvents : null;
          }
        }
    })
  );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
