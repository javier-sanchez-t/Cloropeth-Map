import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClorophetMapComponentComponent } from './clorophet-map-component.component';

describe('ClorophetMapComponentComponent', () => {
  let component: ClorophetMapComponentComponent;
  let fixture: ComponentFixture<ClorophetMapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClorophetMapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClorophetMapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
