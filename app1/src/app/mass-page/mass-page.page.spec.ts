import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MassPagePage } from './mass-page.page';

describe('MassPagePage', () => {
  let component: MassPagePage;
  let fixture: ComponentFixture<MassPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MassPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
