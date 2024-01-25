import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../Interfaces/Document';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private baseUrl = 'http://localhost:8080/documents';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}`);
  }

  findById(id: number): Observable<Document> {
    return this.http.get<Document>(`${this.baseUrl}/${id}`);
  }

  save(document: Document, file: File): Observable<Document> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('document', JSON.stringify(document));
    return this.http.post<Document>(`${this.baseUrl}`, formData);
  }
  

  findByType(type: string): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}/type/${type}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}