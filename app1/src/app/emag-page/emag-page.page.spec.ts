import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmagPagePage } from './emag-page.page';

describe('EmagPagePage', () => {
  let component: EmagPagePage;
  let fixture: ComponentFixture<EmagPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmagPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
