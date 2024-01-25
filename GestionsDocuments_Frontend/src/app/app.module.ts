import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentListComponent } from './document-list/document-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; // Add this import
import { DocumentModalComponent } from './document-modal/document-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { FluxTravailDocumentsListComponent } from './flux-travail-documents-list/flux-travail-documents-list.component';
import { JournalAuditListComponent } from './journal-audit-list/journal-audit-list.component';
import { UtilisateursListComponent } from './utilisateurs-list/utilisateurs-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetadonneesDocumentsModalComponent } from './metadonnees-documents-modal/metadonnees-documents-modal.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { UtilisateursModalComponent } from './utilisateurs-modal/utilisateurs-modal.component';
import {MatSelectModule} from '@angular/material/select';
import { FluxTravailDocumentsModalComponent } from './flux-travail-document-modal/flux-travail-document-modal.component';
import { MetadonneesDocumentsListComponent } from './metadonnees-documents-list/metadonnees-documents-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JornalAuditModalComponent } from './jornal-audit-modal/jornal-audit-modal.component';
import { LoginUserComponent } from './login-user/login-user.component';
@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    DocumentModalComponent,
    FluxTravailDocumentsListComponent,
    JournalAuditListComponent,
    UtilisateursListComponent,
    MetadonneesDocumentsModalComponent,
    UtilisateursModalComponent,
    FluxTravailDocumentsModalComponent,
    MetadonneesDocumentsListComponent,
    DashboardComponent,
    JornalAuditModalComponent,
    LoginUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule, 
    MatFormFieldModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
