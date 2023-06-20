import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphabetInformationPage } from './alphabet-information.page';

describe('AlphabetInformationPage', () => {
  let component: AlphabetInformationPage;
  let fixture: ComponentFixture<AlphabetInformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlphabetInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
