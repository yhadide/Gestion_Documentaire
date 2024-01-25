import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Document } from '../Interfaces/Document';
import { Utilisateurs } from '../Interfaces/Utilisateurs';
import { FluxTravailDocuments } from '../Interfaces/FluxTravailDocuments';
import { UtilisateursService } from '../Services/utilisateurs.service';
import { DocumentService } from '../Services/document.service';
import { FluxTravailDocumentsService } from '../Services/flux-travail-documents.service';

@Component({
  selector: 'app-flux-travail-documents-modal',
  templateUrl: './flux-travail-document-modal.component.html',
  styleUrls: ['./flux-travail-document-modal.component.css'],
})
export class FluxTravailDocumentsModalComponent implements OnInit {
  fluxTravailDocumentsForm: FormGroup;
  utilisateurs: Utilisateurs[] = [];
  documents: Document[] = [];
  etapes: string[] = ['Step 1', 'Step 2', 'Step 3'];
  // Initialize the selectedDocumentId as null
  selectedDocumentId: number | null = null;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<FluxTravailDocumentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FluxTravailDocuments,
    private _utilisateursService: UtilisateursService,
    private _documentService: DocumentService,
    private _fluxTravailDocumentsService: FluxTravailDocumentsService, // Inject the FluxTravailDocumentsService
  ) {
    this.fluxTravailDocumentsForm = this._fb.group({
      etapeFluxTravail: '',
      statut: '',
      document: '',
      utilisateur: '',
     
    });
  }

  ngOnInit(): void {
    this.fetchUtilisateurs();
    this.fetchDocuments();

    if (this.data) {
      this.fluxTravailDocumentsForm.patchValue(this.data);
      this.selectedDocumentId = this.data.document.idDocument; // Set the selectedDocumentId
    }
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
    if (this.fluxTravailDocumentsForm.valid) {
      const formData = this.fluxTravailDocumentsForm.value;
      formData.document = this.documents.find(d => d.idDocument === this.selectedDocumentId);
      if (this.data) {
        // Call the update method of your service to save changes
        this._fluxTravailDocumentsService.save(formData).subscribe(
          (updatedFluxTravailDocument: FluxTravailDocuments) => {
            this._dialogRef.close(updatedFluxTravailDocument);
          },
          (error: any) => {
            console.error(error);
          }
        );
      } else {
        // Call the save method of your service to add a new entry
        this._fluxTravailDocumentsService.save(formData).subscribe(
          (newFluxTravailDocument: FluxTravailDocuments) => {
            this._dialogRef.close(newFluxTravailDocument);
          },
          (error: any) => {
            console.error(error);
          }
        );
      }
    }
  }

  onCancelClick() {
    this._dialogRef.close();
  }
}
