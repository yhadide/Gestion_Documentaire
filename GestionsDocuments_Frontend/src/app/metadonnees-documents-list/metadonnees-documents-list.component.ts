import { Component, OnInit } from '@angular/core';
import { MetadonneesDocuments } from '../Interfaces/MetadonneesDocuments';
import { MetadonneesDocumentsService } from '../Services/metadonnees-documents.service';
import { MatDialog } from '@angular/material/dialog';
import { MetadonneesDocumentsModalComponent } from '../metadonnees-documents-modal/metadonnees-documents-modal.component';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-metadonnees-documents-list',
  templateUrl: './metadonnees-documents-list.component.html',
  styleUrls: ['./metadonnees-documents-list.component.css'],
})
export class MetadonneesDocumentsListComponent implements OnInit {
  metadonneesDocuments: MetadonneesDocuments[] = [];
  selectedDocumentId: number | null = null;
  userName: string = '';
  role: string = '';

  constructor(
    private metadonneesDocumentsService: MetadonneesDocumentsService,
    private dialog: MatDialog,
    private userService: UserService
  ) {
    this.userService.userName$.subscribe(userName => {
      this.userName = userName;
    });
    
    this.userService.Role$.subscribe(role => {
      this.role = role;
    });
  }

  ngOnInit(): void {
    this.loadMetadonneesDocuments();
  }

  loadMetadonneesDocuments() {
    if (this.selectedDocumentId !== null) {
      this.loadMetadonneesDocumentsById(this.selectedDocumentId);
    } else {
      this.metadonneesDocumentsService.findAll().subscribe(
        (data: MetadonneesDocuments[]) => {
          this.metadonneesDocuments = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  loadMetadonneesDocumentsById(documentId: number): void {
    this.metadonneesDocumentsService.findByDocumentId(documentId).subscribe(
      (data) => {
        this.metadonneesDocuments = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteMetadonneesDocument(metadonneesDocument: MetadonneesDocuments) {
    this.metadonneesDocumentsService.delete(metadonneesDocument).subscribe(
      () => {
        console.log('Metadonnes deleted successfully.');
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  openMetadonneesDocMod() {
    this.dialog.open(MetadonneesDocumentsModalComponent, {
      width: '60%',
      height: '60%',
      data: {
        title: 'inserer metadonnes document',
      },
      panelClass: 'my-modal',
    });
  }

  searchMetadonneesDocuments() {
    // Implement your search functionality here
  }

  onSearchInput(event: Event): void {
    // Handle search input changes here
  }
}
