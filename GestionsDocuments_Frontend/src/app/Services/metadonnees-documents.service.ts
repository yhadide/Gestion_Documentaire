import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MetadonneesDocuments } from '../Interfaces/MetadonneesDocuments';

@Injectable({
  providedIn: 'root'
})
export class MetadonneesDocumentsService {
  private baseUrl = 'http://localhost:8080/metadonnees-documents'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<MetadonneesDocuments[]> {
    return this.http.get<MetadonneesDocuments[]>(`${this.baseUrl}`);
  }

  findById(id: number): Observable<MetadonneesDocuments> {
    return this.http.get<MetadonneesDocuments>(`${this.baseUrl}/findById/${id}`);
  }

  findByDocument(documentId: number): Observable<MetadonneesDocuments[]> {
    return this.http.get<MetadonneesDocuments[]>(`${this.baseUrl}/findByDocument/${documentId}`);
  }

  findByDocumentId(documentId: number): Observable<MetadonneesDocuments[]> {
    return this.http.get<MetadonneesDocuments[]>(`${this.baseUrl}/findByDocumentId/${documentId}`);
  }

  save(metadonneesDocuments: MetadonneesDocuments): Observable<MetadonneesDocuments> {
    return this.http.post<MetadonneesDocuments>(`${this.baseUrl}`, metadonneesDocuments);
  }

  delete(metadonneesDocuments: MetadonneesDocuments): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${metadonneesDocuments.idMetadonnee}`);
  }
}
