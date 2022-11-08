import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsImageComponent } from './digimons-image.component';

describe('DigimonsImageComponent', () => {
  let component: DigimonsImageComponent;
  let fixture: ComponentFixture<DigimonsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonsImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
