import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationExplanationComponent } from './recommendation-explanation.component';

describe('RecommendationExplanationComponent', () => {
  let component: RecommendationExplanationComponent;
  let fixture: ComponentFixture<RecommendationExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationExplanationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
