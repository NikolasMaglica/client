import {RegisterPageComponent} from './register-page/register-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './helpers/auth.guard';
import {SecretComponent} from './secret/secret.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminSecretPageComponent} from "./admin-secret-page/admin-secret-page.component";
import {Role} from "./models/role.enum";
import { OffersAddComponent } from './offers/offers-add/offers-add/offers-add.component';
import { MenuComponent } from './menu/menu.component';
import { OffersListsComponent } from './offers/offers-lists/offers-lists.component';
import { EditOffersComponent } from './offers/offers-edit/edit-offers/edit-offers.component';
import { VehicleTypeAddComponent } from './vehicle_type/vehicle-type-add/vehicle-type-add.component';
import { VehicleTypeEditComponent } from './vehicle_type/vehicle-type-edit/vehicle-type-edit.component';
import { VehicleTypeListsComponent } from './vehicle_type/vehicle-type-lists/vehicle-type-lists.component';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { ClientListComponent } from './clients_model/client-list/client-list.component';
import { ClientsAddComponent } from './clients_model/clients-add/clients-add.component';
import { ClientEditComponent } from './clients_model/client-edit/client-edit.component';

const routes: Routes = [
  {
    path: 's',
    component: SecretComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.User, Role.Admin]
    }
  },
  {
    path: 'admin',
    component: AdminSecretPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Admin]
    }
  },
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'clientlist',
    component: ClientListComponent,
  },
  {
    path: 'vehicle',
    component: VehicleAddComponent,
  },
  {
    path: 'client',
    component: ClientsAddComponent,
  },
  {
    path: 'vehicle/edit/:id',
    component: VehicleEditComponent,
  },
  {
    path: 'vehiclelist',
    component: VehicleListComponent,
  },
  {
    path: 'vehicle_type',
    component: VehicleTypeAddComponent,
  },
  {
    path: 'vehicle_type/edit/:id',
    component: VehicleTypeEditComponent,
  },
  {
    path: 'client/edit/:id',
    component: ClientEditComponent,
  },
  {
    path: 'vehicle_typelist',
    component: VehicleTypeListsComponent,
  },
  {
    path: 'offers',
    component: OffersAddComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'offerslist',
    component: OffersListsComponent,
  },
   {
    path: 'offers/edit/:id',
    component: EditOffersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
