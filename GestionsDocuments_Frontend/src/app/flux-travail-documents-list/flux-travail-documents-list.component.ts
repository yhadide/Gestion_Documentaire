import { Component, OnInit } from '@angular/core';
import { FluxTravailDocuments } from '../Interfaces/FluxTravailDocuments';
import { FluxTravailDocumentsService } from '../Services/flux-travail-documents.service';
import { MatDialog } from '@angular/material/dialog';
import { FluxTravailDocumentsModalComponent } from '../flux-travail-document-modal/flux-travail-document-modal.component';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-flux-travail-documents-list',
  templateUrl: './flux-travail-documents-list.component.html',
  styleUrls: ['./flux-travail-documents-list.component.css']
})
// ...

export class FluxTravailDocumentsListComponent implements OnInit {
  fluxTravailDocumentsList: FluxTravailDocuments[] = [];
  selectedDocumentId: number | null = null; // Used to store the selected document ID
  userName: string = '';
  role: string = '';

  constructor(private fluxTravailDocumentsService: FluxTravailDocumentsService, private dialog : MatDialog, private userService: UserService) {
    this.userService.userName$.subscribe(userName => {
      this.userName = userName;
    });
    
    this.userService.Role$.subscribe(role => {
      this.role = role;
    });
   }

  ngOnInit(): void {
    // Load all FluxTravailDocuments on component initialization
    this.loadFluxTravailDocuments();
  }

  // Fetch all FluxTravailDocuments from the backend
  loadFluxTravailDocuments(): void {
    if (this.selectedDocumentId !== null) {
      this.loadFluxTravailDocumentsByDocumentId(this.selectedDocumentId);
    } else {
      this.fluxTravailDocumentsService.findAll().subscribe(
        (data) => {
          this.fluxTravailDocumentsList = data;
        },
        (error) => {
          console.error('Error fetching FluxTravailDocuments:', error);
        }
      );
    }
  }

  // Fetch FluxTravailDocuments by document ID from the backend
  loadFluxTravailDocumentsByDocumentId(documentId: number): void {
    this.fluxTravailDocumentsService.findByDocumentId(documentId).subscribe(
      (data) => {
        this.fluxTravailDocumentsList = data;
      },
      (error) => {
        console.error('Error fetching FluxTravailDocuments by document ID:', error);
      }
    );
  }


  saveFluxTravailDocument(fluxTravailDocuments: FluxTravailDocuments): void {
    this.fluxTravailDocumentsService.save(fluxTravailDocuments).subscribe(
      (savedFluxTravailDocument) => {
        console.log('FluxTravailDocument saved successfully:', savedFluxTravailDocument);
        
        this.loadFluxTravailDocuments();
      },
      (error) => {
        console.error('Error saving FluxTravailDocument:', error);
      }
    );
  }

  OpenDocMod(){
    this.dialog.open(FluxTravailDocumentsModalComponent, {
      width: '60%',
      height: '60%',
      data: {
        title: "ajouter flux travail"
      },
      panelClass: 'my-modal'
    });
  }

  OpenDocEdit(data: any) {
    this.dialog.open(FluxTravailDocumentsModalComponent, {
      width: '60%',
      height: '60%',
      data,
      panelClass: 'my-modal'
    });
  }

}
