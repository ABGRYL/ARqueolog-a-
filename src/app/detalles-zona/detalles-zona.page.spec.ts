import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesZonaPage } from './detalles-zona.page';

describe('DetallesZonaPage', () => {
  let component: DetallesZonaPage;
  let fixture: ComponentFixture<DetallesZonaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesZonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
