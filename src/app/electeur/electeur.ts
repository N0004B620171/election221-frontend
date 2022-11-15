import { Candidat } from "../candidat/candidat";
import { Circonscription } from "../model/circonscription";
export class User{
  username:string;
  roles:string[];
  password:string;
}
export class Electeur {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  password: string;
  passwordConfirm: string;
  dateNaiss: any;
  cni: string;
  adresse: string;
  region: string;
  departement: string;
  commune: string;
    candidat: Candidat;
  
}

