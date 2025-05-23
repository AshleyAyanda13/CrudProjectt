import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountpageComponent } from './accountpage.component';

describe('AccountpageComponent', () => {
  let component: AccountpageComponent;
  let fixture: ComponentFixture<AccountpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
