import { Document } from "./Document";

export interface MetadonneesDocuments {
  idMetadonnee: number;
  idDocument: number;
  document: Document;
  auteur: string;
  motsCles: string;
  dateCreation: Date;
}