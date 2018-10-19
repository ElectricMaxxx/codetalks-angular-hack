import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import * as fromServices from './services';

import { AppComponent } from './components/app.component';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

import { reducers, effects } from './store';

@NgModule({
  declarations: [
    [...fromComponents.components]
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature('app', reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects),
  ],
  providers: [
      [...fromServices.services]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
