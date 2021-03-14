import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoRowComponent } from './team-info-row.component';

describe('TeamInfoRowComponent', () => {
  let component: TeamInfoRowComponent;
  let fixture: ComponentFixture<TeamInfoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamInfoRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
