import { Candidat } from "../candidat/candidat";
import { Circonscription } from "../model/circonscription";

export class Electeur {
  id: number;
  prenom: string;
  nom: string;
  dateNaiss: any;
  cni: string;
  adresse: string;
  circonscription: any;
  candidat: Candidat;
}

