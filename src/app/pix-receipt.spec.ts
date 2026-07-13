import { TestBed } from '@angular/core/testing';
import { PixReceiptComponent } from './pix-receipt';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

describe('PixReceiptComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixReceiptComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PixReceiptComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should set input signals correctly', () => {
    const fixture = TestBed.createComponent(PixReceiptComponent);
    const component = fixture.componentInstance;
    
    fixture.componentRef.setInput('valor', 150.5);
    fixture.componentRef.setInput('nome', 'Erick S.');
    
    fixture.detectChanges();
    
    expect(component.valor()).toBe(150.5);
    expect(component.nome()).toBe('Erick S.');
  });
});
