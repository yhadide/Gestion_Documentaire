import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Document } from '../Interfaces/Document';
import { MetadonneesDocuments } from '../Interfaces/MetadonneesDocuments';
import { DocumentService } from '../Services/document.service';
import { MetadonneesDocumentsService } from '../Services/metadonnees-documents.service';

@Component({
  selector: 'app-metadonnees-documents-modal',
  templateUrl: './metadonnees-documents-modal.component.html',
  styleUrls: ['./metadonnees-documents-modal.component.css']
})
export class MetadonneesDocumentsModalComponent implements OnInit {

  metadonneesDocumentsForm: FormGroup;
  documents: Document[] = [];
  selectedDocumentId: number | null = null;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<MetadonneesDocumentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MetadonneesDocuments,
    private _documentService: DocumentService,
    private _metadonneesDocumentsService: MetadonneesDocumentsService,
  ) {
    this.metadonneesDocumentsForm = this._fb.group({
      idMetadonnee: [data?.idMetadonnee || 0],
      idDocument: [data?.idDocument || '', Validators.required],
      auteur: [data?.auteur || '', Validators.required],
      motsCles: [data?.motsCles || ''],
      dateCreation: [data?.dateCreation || null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchDocuments();

    if (this.data) {
      this.selectedDocumentId = this.data.idDocument;
    }
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
    if (this.metadonneesDocumentsForm.valid) {
      const formData = this.metadonneesDocumentsForm.value;
      formData.document = this.documents.find(d => d.idDocument === this.selectedDocumentId);
      if (this.data) {
        this._metadonneesDocumentsService.save(formData).subscribe(
          (updatedMetadonneesDocuments: MetadonneesDocuments) => {
            this._dialogRef.close(updatedMetadonneesDocuments);
          },
          (error: any) => {
            console.error(error);
          }
        );
      } else {
        this._metadonneesDocumentsService.save(formData).subscribe(
          (newMetadonneesDocuments: MetadonneesDocuments) => {
            this._dialogRef.close(newMetadonneesDocuments);
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