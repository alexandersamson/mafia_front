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
import { LobbyMenuComponent } from './components/pages/game-lobby/partials/lobby-menu/lobby-menu.component';
import { LobbyBodyComponent } from './components/pages/game-lobby/partials/lobby-body/lobby-body.component';
import { ModalBaseTemplateComponent } from './components/modals/base-template/modal-base-template.component';
import { OverviewComponent } from './components/pages/game-lobby/sub-pages/overview/overview.component';
import { MyRoleComponent } from './components/pages/game-lobby/sub-pages/my-role/my-role.component';
import { HostActionsComponent } from './components/pages/game-lobby/sub-pages/host-actions/host-actions.component';
import { PlayerActionsComponent } from './components/pages/game-lobby/sub-pages/player-actions/player-actions.component';
import { GameInfoComponent } from './components/pages/game-lobby/sub-pages/game-info/game-info.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {IconsModule} from './icons/icons.module';
import { ExitGameComponent } from './components/pages/game-lobby/sub-pages/exit-game/exit-game.component';
import { LobbyFooterComponent } from './components/pages/game-lobby/partials/lobby-footer/lobby-footer.component';
import { LobbyHeaderComponent } from './components/pages/game-lobby/partials/lobby-header/lobby-header.component';
import { PlayerContainerComponent } from './components/pages/game-lobby/sub-pages/overview/partials/player-container/player-container.component';
import { PlayerElementComponent } from './components/pages/game-lobby/sub-pages/overview/partials/player-element/player-element.component';
import { EventContainerComponent } from './components/pages/game-lobby/sub-pages/overview/partials/event-container/event-container.component';
import { ChatContainerComponent } from './components/pages/game-lobby/sub-pages/overview/partials/chat-container/chat-container.component';
import { FactionChatContainerComponent } from './components/pages/game-lobby/sub-pages/overview/partials/faction-chat-container/faction-chat-container.component';
import { RoleProfileContainerComponent } from './components/pages/game-lobby/sub-pages/my-role/partials/role-profile-container/role-profile-container.component';


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
    CreatePlayerModalComponent,
    LobbyMenuComponent,
    LobbyBodyComponent,
    ModalBaseTemplateComponent,
    OverviewComponent,
    MyRoleComponent,
    HostActionsComponent,
    PlayerActionsComponent,
    GameInfoComponent,
    ExitGameComponent,
    LobbyFooterComponent,
    LobbyHeaderComponent,
    PlayerContainerComponent,
    PlayerElementComponent,
    EventContainerComponent,
    ChatContainerComponent,
    FactionChatContainerComponent,
    RoleProfileContainerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        IconsModule
    ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
