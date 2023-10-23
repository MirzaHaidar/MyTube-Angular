import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditComponent } from './video-edit.component';

describe('VideoEditComponent', () => {
  let component: VideoEditComponent;
  let fixture: ComponentFixture<VideoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoEditComponent]
    });
    fixture = TestBed.createComponent(VideoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});