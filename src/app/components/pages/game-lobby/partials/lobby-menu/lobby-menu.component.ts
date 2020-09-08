import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Globals} from '../../../../../common/globals';

@Component({
  selector: 'app-lobby-menu',
  templateUrl: './lobby-menu.component.html',
  styleUrls: ['./lobby-menu.component.scss']
})
export class LobbyMenuComponent implements OnInit, AfterViewChecked {
  @ViewChild('lobbymenu') menuBar: ElementRef;

  backDropHeight: number;
  active: number;
  baseUrl = '/game-lobby/';
  currentPage: string;

  constructor(private cdRef: ChangeDetectorRef, private router: Router) {
    this.currentPage = this.router.url;
    if (this.currentPage === (this.baseUrl + Globals.overviewSubPage)){
      this.active = 1;
    }
    if (this.currentPage === (this.baseUrl + Globals.myRoleSubPage)){
      this.active = 2;
    }
    if (this.currentPage === (this.baseUrl + Globals.playerActionsSubPage)){
      this.active = 3;
    }
    if (this.currentPage === (this.baseUrl + Globals.hostActionsSubPage)){
      this.active = 4;
    }
    if (this.currentPage === (this.baseUrl + Globals.gameInfoSubPage)){
      this.active = 5;
    }
    if (this.currentPage === (this.baseUrl + Globals.exitGameSubPAge)){
      this.active = 6;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void{
    this.onResize(null);
    this.cdRef.detectChanges();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.backDropHeight = 20 + this.menuBar.nativeElement.offsetHeight;
  }

}
