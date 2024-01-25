import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utilisateurs } from '../Interfaces/Utilisateurs';
import { UtilisateursService } from '../Services/utilisateurs.service';
// Assuming you have a service to handle utilisateurs CRUD operations

@Component({
  selector: 'app-utilisateurs-modal',
  templateUrl: './utilisateurs-modal.component.html',
  styleUrls: ['./utilisateurs-modal.component.css'],
})
export class UtilisateursModalComponent implements OnInit {
  utilisateurForm: FormGroup;
  roles: string[] = ['Admin', 'User', 'Guest'];
  userUpdated = new EventEmitter<Utilisateurs>();
  

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<UtilisateursModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Utilisateurs,
    private _utilisateursService: UtilisateursService,
  ) {
    this.utilisateurForm = this._fb.group({
      idUtilisateur: 0, // Initialize with 0 as it is auto-incremented on the server
      nomUtilisateur: '',
      motDePasse: '',
      role: '',
      email: '',
      numeroTelephone: '',
    });
  }

  
  ngOnInit(): void {
    if (this.data) {
      this.utilisateurForm.patchValue(this.data);
    }
  }


  onFormSubmit() {
    if (this.utilisateurForm.valid) {
      const formData = this.utilisateurForm.value;
      if (this.data) {
        this._utilisateursService.save(formData).subscribe(
          (updatedUtilisateur: Utilisateurs) => {
            
            
            this._dialogRef.close(updatedUtilisateur);
    
          },
          (error: any) => {
            console.error(error);
          }
        );
      } else {
        this._utilisateursService.save(formData).subscribe(
          (newUtilisateur: Utilisateurs) => {
            
            this._dialogRef.close(newUtilisateur);
          
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
