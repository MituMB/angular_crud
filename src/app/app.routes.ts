import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AdminComponent } from './components/admin/admin.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


export const routes: Routes = [
    { path: '', redirectTo:'dataBinding',pathMatch:'full'},
    { path: 'dataBinding', component: DataBindingComponent},
    { path: 'control-flow', component: ControlStatementComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'user', component: UserListComponent},
    { path: 'template-form', component: TemplateFormComponent},
    { path: 'reactive-form', component: ReactiveFormComponent},
    { path: 'edit/:id', component: UserFormComponent },
  ];
