import { Document } from "./Document";
import { Utilisateurs } from "./Utilisateurs";

export interface JournalAudit {
    idJournal: number;
    document: Document;
    utilisateur: Utilisateurs;
    typeActivite: string;
    horodatage: Date;
  }