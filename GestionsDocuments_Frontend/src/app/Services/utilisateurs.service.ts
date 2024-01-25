import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateurs } from '../Interfaces/Utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private baseUrl = 'http://localhost:8080/utilisateurs';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Utilisateurs[]> {
    return this.http.get<Utilisateurs[]>(`${this.baseUrl}`);
  }

  findById(id: number): Observable<Utilisateurs> {
    return this.http.get<Utilisateurs>(`${this.baseUrl}/${id}`);
  }

  findByNomUtilisateur(nomUtilisateur: string): Observable<Utilisateurs[]> {
    return this.http.get<Utilisateurs[]>(`${this.baseUrl}/nom-utilisateur/${nomUtilisateur}`);
  }

  save(utilisateurs: Utilisateurs): Observable<Utilisateurs> {
    return this.http.post<Utilisateurs>(`${this.baseUrl}`, utilisateurs);
  }

  delete(utilisateurs: Utilisateurs): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${utilisateurs.idUtilisateur}`);
  }

  loginUser(userData: { email: string; motDePasse: string }): Observable<Utilisateurs> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<Utilisateurs>(url, userData);
  }
  
  findByEmailAndPassword(email: string, motDePasse: string): Observable<Utilisateurs> {
    const url = `${this.baseUrl}/login`;
    const userData = { email, motDePasse };
    return this.http.post<Utilisateurs>(url, userData);
  }
}
