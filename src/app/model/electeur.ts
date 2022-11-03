import { Candidat } from "./candidat";
import { Circonscription } from "./circonscription";

export interface Electeur {
    prenom: string;
    nom: string;
    dateNaiss: any;
    cni:string;
    adresse:string;
    circonscription: Circonscription;
    candidat:Candidat;
  }

  