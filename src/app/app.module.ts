import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { HomeComponent } from './components/pages/home/home.component';
import { PublicGamesComponent } from './components/pages/public-games/public-games.component';
import { PaginationComponent } from './components/partials/pagination/pagination.component';
import { MainComponent } from './components/main/main.component';
import { NavMainMenuComponent } from './components/partials/nav-main-menu/nav-main-menu.component';
import { PublicGamesListComponent } from './components/partials/public-games-list/public-games-list.component';
import { PublicGameComponent } from './components/partials/public-game/public-game.component';
import { WithLoadingPipe } from './pipes/with-loading.pipe';
import { DividerBarComponent } from './components/partials/divider-bar/divider-bar.component';
import { JoinGameModalComponent } from './components/modals/join-game-modal/join-game-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';
import { CreateGameComponent } from './components/pages/create-game/create-game.component';
import { GameLobbyComponent } from './components/pages/game-lobby/game-lobby.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { CreatePlayerModalComponent } from './components/modals/create-player-modal/create-player-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicGamesComponent,
    PaginationComponent,
    MainComponent,
    NavMainMenuComponent,
    PublicGamesListComponent,
    PublicGameComponent,
    WithLoadingPipe,
    DividerBarComponent,
    JoinGameModalComponent,
    InfoPageComponent,
    CreateGameComponent,
    GameLobbyComponent,
    FooterComponent,
    CreatePlayerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
