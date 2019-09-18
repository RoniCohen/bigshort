import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyFormComponent } from '../app/company-form/company-form.component';
import { CompanyPageComponent } from '../app/company-page/company-page.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyFormComponent,
    },
    {
        path: ':company',
        component: CompanyPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
