import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from '../Interfaces/Utilisateurs';
import { UtilisateursService } from '../Services/utilisateurs.service';
import { UtilisateursModalComponent } from '../utilisateurs-modal/utilisateurs-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {
  utilisateursList: Utilisateurs[] = [];
  searchQuery: string | undefined;

  constructor(private utilisateursService: UtilisateursService, private dialog : MatDialog, private router: Router) { }

  ngOnInit(): void {
    // Load all utilisateurs on component initialization
    this.loadUtilisateurs();

  }


  // Fetch all utilisateurs from the backend
  loadUtilisateurs(): void {
    this.utilisateursService.findAll().subscribe(
      (data) => {
        this.utilisateursList = data;
        console.log(this.utilisateursList);
      },
      (error) => {
        console.error('Error fetching utilisateurs:', error);
      }
    );
  }

  // Save new utilisateur to the backend
  saveUtilisateur(utilisateur: Utilisateurs): void {
    this.utilisateursService.save(utilisateur).subscribe(
      (savedUtilisateur) => {
        console.log('Utilisateur saved successfully:', savedUtilisateur);
        // Reload the list of utilisateurs after saving
        this.loadUtilisateurs();
      },
      (error) => {
        console.error('Error saving utilisateur:', error);
      }
    );
  }

  // Delete utilisateur from the backend
  deleteUtilisateur(utilisateur: Utilisateurs): void {
    this.utilisateursService.delete(utilisateur).subscribe(
      () => {
        console.log('Utilisateur deleted successfully.');
        // Reload the list of utilisateurs after deleting
        this.loadUtilisateurs();
      },
      (error) => {
        console.error('Error deleting utilisateur:', error);
      }
    );
  }

  onSearchInput(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  searchUtilisateurs(): void {
    if (this.searchQuery) {
      this.utilisateursService.findByNomUtilisateur(this.searchQuery).subscribe(
        (utilisateurs: Utilisateurs[]) => {
          this.utilisateursList = utilisateurs;
        },
        (error: any) => {
          console.error('Error fetching utilisateurs:', error);
        }
      );
    } else {
      this.loadUtilisateurs();
    }
  }


  OpenDocMod(){
    this.dialog.open(UtilisateursModalComponent, {
      width: '60%',
      height: '75%',
      data: {
        title: "ajouter un document"
      },
      panelClass: 'my-modal'
    });
    
  }

  OpenDocModEdit(data: any) {
    this.dialog.open(UtilisateursModalComponent, {
      width: '60%',
      height: '75%',
      data,
      panelClass: 'my-modal'
    });
  }
}
