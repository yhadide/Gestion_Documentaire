import { Component, OnInit } from '@angular/core';
import { JournalAudit } from '../Interfaces/JournalAudit';
import { JournalAuditService } from '../Services/journal-audit.service';
import { MatDialog } from '@angular/material/dialog';
import { JornalAuditModalComponent } from '../jornal-audit-modal/jornal-audit-modal.component';

@Component({
  selector: 'app-journal-audit-list',
  templateUrl: './journal-audit-list.component.html',
  styleUrls: ['./journal-audit-list.component.css']
})
export class JournalAuditListComponent implements OnInit {
  journalAudits: JournalAudit[] = [];
  selectedDocumentId: number | null = null; // Used to store the selected document ID

  constructor(private journalAuditService: JournalAuditService, private dialog:MatDialog) { }

  ngOnInit(): void {
    // Load all JournalAudits on component initialization
    this.loadJournalAudits();
  }

  // Fetch all JournalAudits from the backend
  loadJournalAudits(): void {
    if (this.selectedDocumentId !== null) {
      this.loadJournalAuditsByDocumentId(this.selectedDocumentId);
    } else {
      this.journalAuditService.findAll().subscribe(
        (data) => {
          this.journalAudits = data;
        },
        (error) => {
          console.error('Error fetching JournalAudits:', error);
        }
      );
    }
  }

  // Fetch JournalAudits by document ID from the backend
  loadJournalAuditsByDocumentId(documentId: number): void {
    this.journalAuditService.findByDocumentId(documentId).subscribe(
      (data) => {
        this.journalAudits = data;
      },
      (error) => {
        console.error('Error fetching JournalAudits by document ID:', error);
      }
    );
  }

  // Save new JournalAudit to the backend
  saveJournalAudit(journalAudit: JournalAudit): void {
    this.journalAuditService.save(journalAudit).subscribe(
      (savedJournalAudit) => {
        console.log('JournalAudit saved successfully:', savedJournalAudit);
        // Reload the list of JournalAudits after saving
        this.loadJournalAudits();
      },
      (error) => {
        console.error('Error saving JournalAudit:', error);
      }
    );
  }

  OpenDocMod(){
    this.dialog.open(JornalAuditModalComponent, {
      width: '60%',
      height: '60%',
      data: {
        title: "ajouter flux travail"
      },
      panelClass: 'my-modal'
    });
  }

}
