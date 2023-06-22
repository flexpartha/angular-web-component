import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugContentComponent } from './slug-content.component';

describe('SlugContentComponent', () => {
  let component: SlugContentComponent;
  let fixture: ComponentFixture<SlugContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlugContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlugContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
