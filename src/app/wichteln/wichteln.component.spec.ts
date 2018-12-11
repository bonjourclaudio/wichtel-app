import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WichtelnComponent } from './wichteln.component';

describe('WichtelnComponent', () => {
  let component: WichtelnComponent;
  let fixture: ComponentFixture<WichtelnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WichtelnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WichtelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
