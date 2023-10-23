import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllVideosComponent } from './all-videos/all-videos.component';
import { UserVideosComponent } from './user-videos/user-videos.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoEditComponent } from './video-edit/video-edit.component';



@NgModule({
  declarations: [
    AllVideosComponent,
    UserVideosComponent,
    VideoDetailComponent,
    VideoEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VideoModuleModule { }
