import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentService } from '../Services/document.service';

@Component({
  selector: 'app-document-modal',
  templateUrl: './document-modal.component.html',
  styleUrls: ['./document-modal.component.css']
})
export class DocumentModalComponent implements OnInit {

  myform: FormGroup;
  selectedFile: File | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DocumentModalComponent>,
    private formBuilder: FormBuilder,
    private documentService: DocumentService
  ) {
    this.myform = this.formBuilder.group({
      typeDocument: '',
      expediteur: '',
      destinataire: '',
      contenu: '',
      documentImg: null,
      date: null
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.myform.patchValue(this.data);
    }
  }

  CloseDocMod() {
    this.dialogRef.close();
  }

  onFileChange(event: any) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    }
  }

  saveDoc(documentId?: number) {
    if (this.myform.valid) {
      const documentData = { ...this.myform.value };
      if (this.selectedFile) {
        if (documentId) {
          this.documentService.save(documentData, this.selectedFile)
            .subscribe(response => {
              console.log('Document updated successfully', response);
            }, error => {
              console.error('Error updating document', error);
            });
        } else {
          this.documentService.save(documentData, this.selectedFile)
            .subscribe(response => {
              console.log('Document saved successfully', response);
            }, error => {
              console.error('Error saving document', error);
            });
        }
      } else {
        console.error('No file selected');      }
    }
  }
}
