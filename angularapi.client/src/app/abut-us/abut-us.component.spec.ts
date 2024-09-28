import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbutUsComponent } from './abut-us.component';

describe('AbutUsComponent', () => {
  let component: AbutUsComponent;
  let fixture: ComponentFixture<AbutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
