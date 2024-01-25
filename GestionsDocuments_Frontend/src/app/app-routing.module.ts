import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';
import { FluxTravailDocumentsListComponent } from './flux-travail-documents-list/flux-travail-documents-list.component';
import { JournalAuditListComponent } from './journal-audit-list/journal-audit-list.component';
import { UtilisateursListComponent } from './utilisateurs-list/utilisateurs-list.component';
import { MetadonneesDocumentsListComponent } from './metadonnees-documents-list/metadonnees-documents-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUserComponent } from './login-user/login-user.component'; // Import the LoginUserComponent

const routes: Routes = [
  { path: 'login', component: LoginUserComponent }, // Add a route for the login page
  { path: 'documents', component: DocumentListComponent },
  { path: 'flux-travail-documents', component: FluxTravailDocumentsListComponent },
  { path: 'journal-audit', component: JournalAuditListComponent },
  { path: 'utilisateurs', component: UtilisateursListComponent },
  { path: 'metadonnees-documents', component: MetadonneesDocumentsListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' } // Set the login page as the default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
