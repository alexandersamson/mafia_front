import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-lobby-menu',
  templateUrl: './lobby-menu.component.html',
  styleUrls: ['./lobby-menu.component.scss']
})
export class LobbyMenuComponent implements OnInit, AfterViewChecked {
  @ViewChild('lobbymenu') menuBar: ElementRef;

  backDropHeight: number;
  active: number;

  constructor(private cdRef: ChangeDetectorRef) { }

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
