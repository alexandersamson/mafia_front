import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import {
  LockFill,
  PersonCircle,
  PeopleFill,
  UnlockFill,
  HouseFill,
  Moon,
  Sun,
  BriefcaseFill,
  GearFill,
  InfoCircleFill,
  LightningFill,
  XCircleFill,
  FileEarmarkCheckFill
} from 'ng-bootstrap-icons/icons';

const icons = {
  LockFill,
  UnlockFill,
  PersonCircle,
  PeopleFill,
  HouseFill,
  Moon,
  Sun,
  BriefcaseFill,
  LightningFill,
  GearFill,
  InfoCircleFill,
  XCircleFill,
  FileEarmarkCheckFill //Voting
};

@NgModule({
  declarations: [],
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})

export class IconsModule { }
