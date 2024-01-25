import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FluxTravailDocuments } from '../Interfaces/FluxTravailDocuments';

@Injectable({
  providedIn: 'root'
})
export class FluxTravailDocumentsService {
  private baseUrl = 'http://localhost:8080/flux-travail-documents';

  constructor(private http: HttpClient) { }

  findAll(): Observable<FluxTravailDocuments[]> {
    return this.http.get<FluxTravailDocuments[]>(`${this.baseUrl}`);
  }

  findByDocumentId(documentId: number): Observable<FluxTravailDocuments[]> {
    return this.http.get<FluxTravailDocuments[]>(`${this.baseUrl}/${documentId}`);
  }

  save(fluxTravailDocuments: FluxTravailDocuments): Observable<FluxTravailDocuments> {
    return this.http.post<FluxTravailDocuments>(`${this.baseUrl}`, fluxTravailDocuments);
  }
}
