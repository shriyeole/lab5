import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphabetInformation1Page } from './alphabet-information1.page';

describe('AlphabetInformation1Page', () => {
  let component: AlphabetInformation1Page;
  let fixture: ComponentFixture<AlphabetInformation1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlphabetInformation1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
