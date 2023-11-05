import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterComponent } from './footer/footer.component';
import { AchievComponent } from './achiev/achiev.component';
import { FeaturesComponent } from './features/features.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { NavbarLandingComponent } from '../../components/navbar-landing/navbar-landing.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LandingComponent,
    MainSectionComponent,
    FeaturesComponent,
    AchievComponent,
    NavbarLandingComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingModule { }
