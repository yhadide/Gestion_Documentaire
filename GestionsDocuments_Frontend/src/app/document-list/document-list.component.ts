import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../Services/document.service';
import { Document } from '../Interfaces/Document';
import { MatDialog } from '@angular/material/dialog';
import { DocumentModalComponent } from '../document-modal/document-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../Services/user.service';



@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  searchQuery: string | undefined;
  userName: string = '';
  role: string = '';


  constructor(private documentService: DocumentService, private dialog : MatDialog, private userService: UserService) {
    this.userService.userName$.subscribe(userName => {
      this.userName = userName;
    });
    
    this.userService.Role$.subscribe(role => {
      this.role = role;
    });
   }

  ngOnInit(): void {
    this.loadDocuments();
    
  }

  loadDocuments(): void {
    this.documentService.findAll().subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      },
      (error: any) => {
        console.error('Error fetching documents:', error);
      }
    );
  }

  getImageDownloadUrl(document: Document): string | null {
    if (document.documentImg && document.documentImg.length > 0) {
      const base64String = this.arrayBufferToBase64(document.documentImg);
      return 'data:image/png;base64,' + base64String;
    } else {
      return null; // Return null if no image is available
    }
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  deleteDocument(id: number): void {
    this.documentService.delete(id).subscribe(
      () => {
        console.log('Document deleted successfully.');
        this.loadDocuments();
      },
      (error: any) => {
        console.error('Error deleting document:', error);
      }
    );
  }

  OpenDocMod(){
    this.dialog.open(DocumentModalComponent, {
      width: '60%',
      height: '70%',
      data: {
        title: "ajouter un document"
      },
      panelClass: 'my-modal'
    });
  }

  OpenDocModEdit(data:any) {
    this.dialog.open(DocumentModalComponent, {
      width: '60%',
      height: '70%',
      data,
      panelClass: 'my-modal'
    });
  }

  onSearchInput(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  searchDocuments(): void {
    if (this.searchQuery) {
      this.documentService.findByType(this.searchQuery).subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        },
        (error: any) => {
          console.error('Error fetching documents:', error);
        }
      );
    } else {
      this.loadDocuments();
    }
  }
}