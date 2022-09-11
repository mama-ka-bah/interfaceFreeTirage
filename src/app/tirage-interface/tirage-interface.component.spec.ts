import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirageInterfaceComponent } from './tirage-interface.component';

describe('TirageInterfaceComponent', () => {
  let component: TirageInterfaceComponent;
  let fixture: ComponentFixture<TirageInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirageInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TirageInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
