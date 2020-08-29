import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PublicGamesComponent} from './components/pages/public-games/public-games.component';
import {InfoPageComponent} from './components/pages/info-page/info-page.component';
import {GameLobbyComponent} from './components/pages/game-lobby/game-lobby.component';
import {CreateGameComponent} from './components/pages/create-game/create-game.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
    path: 'game-lobby',
    component: GameLobbyComponent
  },
  {
    path: 'info-page',
    component: InfoPageComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
