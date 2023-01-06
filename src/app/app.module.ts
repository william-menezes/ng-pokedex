import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { DescriptionPipe } from './pipes/description.pipe';
import { IdPipe } from './pipes/id.pipe';
import { MeasuresConverterPipe } from './pipes/measures-converter.pipe';
import { CalculatePercentagePipe } from './pipes/calculate-percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    SearchBarComponent,
    DescriptionPipe,
    IdPipe,
    MeasuresConverterPipe,
    CalculatePercentagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
