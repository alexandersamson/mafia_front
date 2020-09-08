import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-loader',
  templateUrl: './small-loader.component.html',
  styleUrls: ['./small-loader.component.scss']
})
export class SmallLoaderComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
