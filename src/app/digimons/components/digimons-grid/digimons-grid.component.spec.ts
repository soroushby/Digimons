import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsGridComponent } from './digimons-grid.component';

describe('DigimonsGridComponent', () => {
  let component: DigimonsGridComponent;
  let fixture: ComponentFixture<DigimonsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
