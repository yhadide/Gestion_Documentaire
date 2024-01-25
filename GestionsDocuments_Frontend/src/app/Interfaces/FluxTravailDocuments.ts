import { Document } from "./Document";
import { Utilisateurs } from "./Utilisateurs";

export interface FluxTravailDocuments {
    idFluxTravail: number;
    document: Document;
    etapeFluxTravail: string;
    utilisateur: Utilisateurs;
    statut: string;
  }