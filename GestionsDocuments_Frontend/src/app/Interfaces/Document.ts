export interface Document {
  idDocument: number;
  typeDocument: string;
  expediteur: string;
  destinataire: string;
  contenu: string;
  documentImg?: any; // Updated to accept File or null
  date: Date;
}
