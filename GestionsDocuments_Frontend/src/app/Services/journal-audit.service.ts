import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JournalAudit } from '../Interfaces/JournalAudit';

@Injectable({
  providedIn: 'root'
})
export class JournalAuditService {
  private baseUrl = 'http://localhost:8080/journal-audit'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<JournalAudit[]> {
    return this.http.get<JournalAudit[]>(`${this.baseUrl}`);
  }

  findByDocumentId(documentId: number): Observable<JournalAudit[]> {
    return this.http.get<JournalAudit[]>(`${this.baseUrl}/${documentId}`);
  }

  save(journalAudit: JournalAudit): Observable<JournalAudit> {
    return this.http.post<JournalAudit>(`${this.baseUrl}`, journalAudit);
  }
}
