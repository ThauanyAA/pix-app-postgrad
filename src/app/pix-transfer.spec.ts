import { TestBed } from '@angular/core/testing';
import { PixTransferComponent } from './pix-transfer';

describe('PixTransferComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixTransferComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PixTransferComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should show error modal if value is greater than 5000', () => {
    const fixture = TestBed.createComponent(PixTransferComponent);
    const component = fixture.componentInstance;

    component.chavePix.set('12345678900');
    component.valor.set(5000.01);
    component.dataAgendamento.set('2026-07-11');

    component.confirmar();

    expect(component.showError()).toBe(true);
    expect(component.errorTitle()).toBe('Limite Excedido');
    expect(component.errorMessage()).toBe('Para sua segurança, transferencias Pix acima de R$ 5.000,00 precisam ser aprovadas pelo gerenre');
    expect(component.confirmado()).toBe(false);
  });

  it('should confirm transfer if value is less than or equal to 5000', () => {
    const fixture = TestBed.createComponent(PixTransferComponent);
    const component = fixture.componentInstance;

    component.chavePix.set('12345678900');
    component.valor.set(5000);
    component.dataAgendamento.set('2026-07-11');

    component.confirmar();

    expect(component.showError()).toBe(false);
    expect(component.confirmado()).toBe(true);
  });
});
