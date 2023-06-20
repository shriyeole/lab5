import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphabetInformation2Page } from './alphabet-information2.page';

describe('AlphabetInformation2Page', () => {
  let component: AlphabetInformation2Page;
  let fixture: ComponentFixture<AlphabetInformation2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlphabetInformation2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
