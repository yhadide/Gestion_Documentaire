import { Component, OnInit } from '@angular/core';
import { Document } from '../Interfaces/Document';
import { MetadonneesDocuments } from '../Interfaces/MetadonneesDocuments';
import { FluxTravailDocuments } from '../Interfaces/FluxTravailDocuments';
import { DocumentService } from '../Services/document.service';
import { MetadonneesDocumentsService } from '../Services/metadonnees-documents.service';
import { FluxTravailDocumentsService } from '../Services/flux-travail-documents.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedDocuments: Document[] = [];
  displayedMetadata: MetadonneesDocuments[] = [];
  displayedWorkflowDocuments: FluxTravailDocuments[] = [];


  constructor(
    private documentService: DocumentService,
    private metadonneesDocumentsService: MetadonneesDocumentsService,
    private fluxTravailDocumentsService: FluxTravailDocumentsService,
  ) {}

  ngOnInit(): void {
   
    this.documentService.findAll().subscribe((data) => {
      this.displayedDocuments = data.slice(0, 2);
    });

    this.metadonneesDocumentsService.findAll().subscribe((data) => {
      this.displayedMetadata = data.slice(0, 2);
    });

    this.fluxTravailDocumentsService.findAll().subscribe((data) => {
      this.displayedWorkflowDocuments = data.slice(0, 2);
    });
  }

  getImageDownloadUrl(document: Document) {
  }
}
