import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCmpComponent } from './my-cmp.component';

describe('MyCmpComponent', () => {
  let component: MyCmpComponent;
  let fixture: ComponentFixture<MyCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
