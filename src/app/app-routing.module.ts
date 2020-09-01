import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PublicGamesComponent} from './components/pages/public-games/public-games.component';
import {InfoPageComponent} from './components/pages/info-page/info-page.component';
import {GameLobbyComponent} from './components/pages/game-lobby/game-lobby.component';
import {CreateGameComponent} from './components/pages/create-game/create-game.component';
import {OverviewComponent} from './components/pages/game-lobby/sub-pages/overview/overview.component';
import {MyRoleComponent} from './components/pages/game-lobby/sub-pages/my-role/my-role.component';
import {PlayerActionsComponent} from './components/pages/game-lobby/sub-pages/player-actions/player-actions.component';
import {HostActionsComponent} from './components/pages/game-lobby/sub-pages/host-actions/host-actions.component';
import {GameInfoComponent} from './components/pages/game-lobby/sub-pages/game-info/game-info.component';
import {ExitGameComponent} from './components/pages/game-lobby/sub-pages/exit-game/exit-game.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'public-games',
    component: PublicGamesComponent
  },
  {
    path: 'create-game',
    component: CreateGameComponent
  },
  {
    path: 'info-page',
    component: InfoPageComponent
  },
  {
    path: 'game-lobby',
    component: GameLobbyComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent},
      {path: 'my-role', component: MyRoleComponent},
      {path: 'player-actions', component: PlayerActionsComponent},
      {path: 'host-actions', component: HostActionsComponent},
      {path: 'game-info', component: GameInfoComponent},
      {path: 'exit-game', component: ExitGameComponent}
    ]
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
