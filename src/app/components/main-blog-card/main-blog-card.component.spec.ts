import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlogCardComponent } from './main-blog-card.component';

describe('MainBlogCardComponent', () => {
  let component: MainBlogCardComponent;
  let fixture: ComponentFixture<MainBlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBlogCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
