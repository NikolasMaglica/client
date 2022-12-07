import {TokenInterceptor} from './helpers/token.interceptor';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SecretComponent} from './secret/secret.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AdminSecretPageComponent} from './admin-secret-page/admin-secret-page.component';
import { OffersAddComponent } from './offers/offers-add/offers-add/offers-add.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { OffersListsComponent } from './offers/offers-lists/offers-lists.component';
import { EditOffersComponent } from './offers/offers-edit/edit-offers/edit-offers.component';
import { VehicleTypeAddComponent } from './vehicle_type/vehicle-type-add/vehicle-type-add.component';
import { VehicleTypeEditComponent } from './vehicle_type/vehicle-type-edit/vehicle-type-edit.component';
import { VehicleTypeListsComponent } from './vehicle_type/vehicle-type-lists/vehicle-type-lists.component';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { ClientListComponent } from './clients_model/client-list/client-list.component';
import { ClientsAddComponent } from './clients_model/clients-add/clients-add.component';
import { ClientEditComponent } from './clients_model/client-edit/client-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AdminSecretPageComponent,
    OffersAddComponent,
    MenuComponent,
    OffersListsComponent,
    EditOffersComponent,
    VehicleTypeAddComponent,
    VehicleTypeEditComponent,
    VehicleTypeListsComponent,
    VehicleAddComponent,
    VehicleEditComponent,
    VehicleListComponent,
    ClientListComponent,
    ClientsAddComponent,
    ClientEditComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
