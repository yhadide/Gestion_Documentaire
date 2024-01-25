import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Document } from '../Interfaces/Document';
import { Utilisateurs } from '../Interfaces/Utilisateurs';
import { JournalAudit } from '../Interfaces/JournalAudit';
import { UtilisateursService } from '../Services/utilisateurs.service';
import { DocumentService } from '../Services/document.service';
import { JournalAuditService } from '../Services/journal-audit.service';

@Component({
  selector: 'app-jornal-audit-modal',
  templateUrl: './jornal-audit-modal.component.html',
  styleUrls: ['./jornal-audit-modal.component.css'],
})
export class JornalAuditModalComponent implements OnInit {
  journalAuditForm: FormGroup;
  utilisateurs: Utilisateurs[] = [];
  documents: Document[] = [];
  typeActivites: string[] = ['Type 1', 'Type 2', 'Type 3'];
  // Initialize the selectedDocumentId and selectedUtilisateurId as null
  selectedDocumentId: number | null = null;
  selectedUtilisateurId: number | null = null;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<JornalAuditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JournalAudit,
    private _utilisateursService: UtilisateursService,
    private _documentService: DocumentService,
    private _journalAuditService: JournalAuditService, // Inject the JournalAuditService
  ) {
    this.journalAuditForm = this._fb.group({
      idJournal: 0,
      document: '',
      utilisateur: '',
      typeActivite: '',
      horodatage: '',
    });
  }

  ngOnInit(): void {
    this.fetchUtilisateurs();
    this.fetchDocuments();
  }

  fetchUtilisateurs() {
    this._utilisateursService.findAll().subscribe(
      (utilisateurs: Utilisateurs[]) => {
        this.utilisateurs = utilisateurs;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  fetchDocuments() {
    this._documentService.findAll().subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onFormSubmit() {
    if (this.journalAuditForm.valid) {
      const formData = this.journalAuditForm.value;
      formData.document = this.documents.find(d => d.idDocument === this.selectedDocumentId);
      formData.utilisateur = this.utilisateurs.find(u => u.idUtilisateur === this.selectedUtilisateurId);
      console.log('Form is valid. Submitting...');
      this._journalAuditService.save(formData).subscribe(
        (newJournalAudit: JournalAudit) => {

        },
        (error: any) => {
          console.error(error);
        }
      );
    }else  console.log('Form is invalid. Cannot submit.');
  }
  

  onCancelClick() {
    this._dialogRef.close();
  }
}