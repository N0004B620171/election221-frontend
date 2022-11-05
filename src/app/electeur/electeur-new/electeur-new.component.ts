import { Component, OnInit } from '@angular/core';
import { Circonscription } from 'src/app/model/circonscription';
import { Electeur } from '../electeur';
import { ElecteurService } from '../electeur.service';



@Component({
  selector: 'app-electeur-new',
  templateUrl: './electeur-new.component.html',
  styleUrls: ['./electeur-new.component.css']
})

export class ElecteurNewComponent implements OnInit {

  electeur = new Electeur();
  circonscription = new Circonscription();
  err: number;

  regions: string[] = [
    "Dakar",
    "Thies",
    "Louga",
    "Kaolack",
    "Diourbel",
    "Fatick",
    "Kaffrine",
    "Saint-Louis",
    "Matam",
    "Kédougou",
    "Tambacounda",
    "Kolda",
    "Sédhiou",
    "Ziguinchor"
  ];
  departementDakar: string[] = ["Dakar",
    "Pikine",
    "Guédiawaye",
    "Rufisque"
  ]; departementThies: string[] = ["Thies",
    "Tivaouane",
    "Mbour"
  ]; departementLouga: string[] = ["Louga",
    "Kébémer",
    "Linguère"
  ]; departementKaolack: string[] = ["Kaolack",
    "Guinguinéo",
    "Nioro du Rip"
  ]; departementDiourbel: string[] = ["Diourbel",
    "Bambey",
    "Mbacké",
  ]; departementFatick: string[] = ["Fatick",
    "Foundiougne",
    "Gossas",
  ]; departementKaffrine: string[] = ["Kaffrine",
    "Birkilane",
    "Malème-Hodar",
    "Koungheul"
  ]; departementSaintLouis: string[] = ["Saint-Louis",
    "Dagana",
    "Podor",
  ]; departementMatam: string[] = ["Matam",
    "Kanel",
    "Ranérou",
  ]; departementKedougou: string[] = ["Kédougou",
    "Salémata",
    "Saraya",
  ]; departementTambacounda: string[] = ["Tambacounda",
    "Goudiry",
    "Bakel",
    "Koumpentoum"
  ]; departementKolda: string[] = ["Kolda",
    "Médina Yoro Foulah",
    "Vélingara",
  ]; departementSedhiou: string[] = ["Sédhiou",
    "Bounkiling",
    "Goudomp",
  ]; departementZiguinchor: string[] = ["Ziguinchor",
    "Bignona",
    "Oussouye",
  ];
  communeDakar: string[] = [
    "Gorée",
    "Dakar Plateau",
    "Gueule Tapée",
    "Fass",
    "Colobane",
    "Fann-Point E-Amitié",
    "Médina",
    "Grand-Dakar",
    "Biscuiterie",
    "Dieuppeul-Derklé",
    "Hann-Bel-Air",
    "Sicap-Liberté",
    "HLM",
    "Mermoz-Sacré Coeur",
    "Ouakam",
    "Ngor",
    "Yoff",
    "Grand-Yoff",
    "Patte d?oie",
    "Parcelles Assainies",
    "Cambérène"
  ];
  communePikine: string[] = [
    "Pikine- Est",
    "Pikine-Nord",
    "Pikine-Ouest",
    "Dalifort-Foirail",
    "Djeddha Thiaroye Kao",
    "Guinaw Rail-Nord",
    "Guinaw Rail-Sud",
    "Tivaoune-Diacksao",
    "Diamagueune-Sicap Mbao",
    "Mbao",
    "Keur Massar",
    "Malika",
    "Yeumbeul-Sud",
    "Yeumbeul-Nord"
  ];
  communeGuediawaye: string[] = [
    "Golf-Sud",
    "Sam-Notaire",
    "Ndiarème-Limamoulaye",
    "Wakhinane",
    "Médina Gounass"
  ];
  communeRufisque: string[] = [
    "Bargny",
    "Sébikotane",
    "Sendou",
    "Rufisque-Est",
    "Rufisque-Nord",
    "Rufisque-Ouest",
    "Bambylor",
    "Yène",
    "Tivaouane Peulh-Niaga",
    "Diamniadio",
    "Sangalkam",
    "Jaxaay-Parcelles-Niakoul Rap"
  ];
  communeThies: string[] = [
    "Khombole",
    "Pout",
    "Thiès-Ouest",
    "Thiès-Est",
    "Thiès-Nord",
    "Thiénaba",
    "Ngoudiane",
    "Ndiéyène Sirakh",
    "Touba Toul",
    "Keur Moussa",
    "Diender",
    "Fandène",
    "Kayar",
    "Notto",
    "Tassète"
  ];
  communeTivaouane: string[] = [
    "Tivaouane",
    "Mékhé",
    "Mboro",
    "Méouane",
    "Darou Khoudoss",
    "Taïba Ndiaye",
    "Mérina Dakhar",
    "Koul",
    "Pékèsse",
    "Niakhène",
    "Mbayène",
    "Thilmakha",
    "Ngandiouf",
    "Notto Gouye Diama",
    "Mont Rolland",
    "Pire Goureye",
    "Chérif Lo",
    "Pambal"
  ];
  communeMbour: string[] = [
    "Mbour",
    "Joal Fadiouth",
    "Fissel",
    "Ndiaganiao",
    "Sessene",
    "Sandiara",
    "Nguéniène",
    "Thiadiaye",
    "Sindia",
    "Malicounda",
    "Diass",
    "Nguékhokh",
    "Saly Portudal",
    "Ngaparou",
    "Somone",
    "Popenguine-Ndayane"
  ];
  communeLouga: string[] = [
    "Coki",
    "Ndiagne",
    "Guet Ardo",
    "Thiamène Cayor",
    "Pété Ouarack",
    "Keur Momar Sarr",
    "Nguer Malal",
    "Syer",
    "Gande",
    "Mbédiene",
    "Niomré",
    "Nguidilé",
    "Kéle Gueye",
    "Léona",
    "Sakal",
    "Ngueune Sarr"
  ];
  communeKebemer: string[] = [
    "Bandegne Ouolof",
    "Diokoul Diawrigne",
    "Kab Gaye",
    "Ndande",
    "Thieppe",
    "Guéoul",
    "Mbacké Cajor",
    "Darou Marnane",
    "Darou Mousty",
    "Mbadiane",
    "Ndoyene",
    "Sam Yabal",
    "Touba Mérina",
    "Ngourane Ouolof",
    "Thiolom Fall",
    "Sagatta Gueth",
    "Kanène Ndiob",
    "Loro"
  ];
  communeLinguere: string[] = [
    "Linguère",
    "Dahra",
    "Barkédji",
    "Gassane",
    "Thiargny",
    "Thiel",
    "Boulal",
    "Dealy",
    "Thiamène Pass",
    "Sagatta Djolof",
    "Affé Djiolof",
    "Dodji",
    "Labgar",
    "Ouarkhokh",
    "Kamb",
    "Mboula",
    "Téssékéré Forage",
    "Yang-Yang"
  ];
  communeKaolack: string[] = [
    "Kaolack",
    "Kahone",
    "Keur Baka",
    "Latmingué",
    "Thiaré",
    "Ndoffane",
    "Keur Socé",
    "Ndiaffate",
    "Ndiedieng",
    "Dya",
    "Ndiébel",
    "Thiomby",
    "Gandiaye",
    "Sibassor"
  ];
  communeGuinguineo: string[] = [
    "Guinguinéo",
    "Khelcom ? Birane",
    "Mbadakhoune",
    "Ndiago",
    "Ngathie Naoudé",
    "Fass",
    "Gagnick",
    "Dara Mboss",
    "Nguélou",
    "Nguélou",
    "Ourour",
    "Panal Ouolof",
    "Mboss"
  ];
  communeNioroduRip: string[] = [
    "Kayemor",
    "Médina Sabakh",
    "Ngayene",
    "Gainthe Kaye",
    "Dabaly",
    "Darou Salam",
    "Paos Koto",
    "Porokhane",
    "Taïba Niassène",
    "Keur Maba Diakhou",
    "Keur Madongo",
    "Ndramé Escale",
    "Wack Ngouna",
    "Keur Madiabel"
  ];
  communeDiourbel: string[] = [
    "Diourbel",
    "Ndoulo",
    "Ngohe",
    "Pattar",
    "Tocky Gare",
    "Touré Mbondé",
    "Ndankh Séne",
    "Gade Escale",
    "Touba Lappé",
    "Keur Ngalgou",
    "Ndindy",
    "Taïba Moutoupha"
  ];
  communeBambey: string[] = [
    "Bambey",
    "Dinguiraye",
    "Baba Garage",
    "Keur Samba Kane",
    "Ngoye",
    "Thiakhar",
    "Ndondol",
    "Ndangalma",
    "Lambaye",
    "Réfane",
    "Gawane",
    "Ngogom"
  ];
  communeMbacke: string[] = [
    "Ngogom",
    "Touba Mosquée",
    "Dalla Ngabou",
    "Missirah",
    "Nghaye",
    "Touba Fall",
    "Darou Salam Typ",
    "Darou Nahim",
    "Kael",
    "Madina",
    "Touba Mboul",
    "Taïba Thièkène",
    "Dendèye Gouy Gui",
    "Ndioumane",
    "Taïf",
    "Sadio"
  ];
  communeFatick: string[] = [
    "Dioffior",
    "Thiaré Ndialgui",
    "Diaoulé",
    "Mbéllacadiao",
    "Ndiop",
    "Ndiop",
    "Diakhao",
    "Djilasse",
    "Djilasse",
    "Loul Sessène",
    "Palmarin Facao",
    "Niakhar",
    "Ngayokhème",
    "Patar",
    "Diarrère",
    "Diouroup",
    "Tattaguine"
  ];
  communeFoundiougne: string[] = [
    "Foundiougne",
    "Sokone",
    "Keur Saloum Diané",
    "Keur Samba Gueye",
    "Toubacouta",
    "Nioro Alassane Tall",
    "Karang Poste",
    "Passy",
    "Soum",
    "Diossong",
    "Djilor",
    "Niassène",
    "Diagane Barka",
    "Diagane Barka",
    "Mbam",
    "Bassoul",
    "Dionewar",
    "Djirnda"
  ];
  communeGossas: string[] = [
    "Gossas",
    "Colobane",
    "Mbar",
    "Ndiene Lagane",
    "Ouadiour",
    "Patar Lia"
  ];
  communeKaffrine: string[] = [
    "Nganda",
    "Diamagadio",
    "Diokoul Belbouck",
    "Kathiotte",
    "Médinatoul Salam 2",
    "Gniby",
    "Boulel",
    "Kahi"
  ];
  communeBirkilane: string[] = [
    "Birkelane",
    "Keur Mboucki",
    "Touba Mbella",
    "Diamal",
    "Mabo",
    "Ndiognick",
    "Ségré-gatta",
    "Mbeuleup"
  ];
  communeMalemeHodar: string[] = [
    "Malème-Hodar",
    "Darou Miname II",
    "Khelcom",
    "Ndioum Ngainth",
    "Ndiobène Samba Lamo",
    "Sagna",
    "Dianké Souf "
  ];
  communeKoungheul: string[] = [
    "Koungheul",
    "Missirah Wadène",
    "Maka Yop",
    "Ngainthe Pathé",
    "Fass Thièkène",
    "Saly Escale",
    "Ida Mouride",
    "Ribot Escale",
    "Lour Escale"
  ];
  communeSaintLouis: string[] = [
    "Saint-Louis",
    "Mpal",
    "Fass Ngom",
    "Ndiébène Gandiol",
    "Gandon"
  ];
  communeDagana: string[] = [
    "Dagana",
    "Richard Toll",
    "Ross-Béthio",
    "Rosso-Sénégal",
    "Ngnith",
    "Diama",
    "Ronkh",
    "Ndombo Sandjiry",
    "Gae",
    "Bokhol",
    "Mbane"
  ];
  communePodor: string[] = [
    "Podor",
    "Méry",
    "Doumga Lao",
    "Madina Diathbé",
    "Golléré",
    "Mboumba",
    "Walaldé",
    "Aéré Lao",
    "Gamadji Saré",
    "Dodel",
    "Guedé Village",
    "Guédé Chantier",
    "Démette",
    "Bodé Lao",
    "Fanaye",
    "Ndiayene Peindao",
    "Ndiandane",
    "Mbolo Birane",
    "Boké Dialloubé",
    "Galoya Toucouleur",
    "Pété"
  ];
  communeMatam: string[] = [
    "Matam",
    "Ourossogui",
    "Thilogne",
    "Nguidjilone",
    "Dabia",
    "Des Agnam Civol",
    "Oréfondé",
    "Bokidiawé",
    "Nabadji Civol",
    "Ogo"
  ];
  communeKanel: string[] = [
    "Kanel",
    "Odobéré",
    "Wouro Sidy",
    "Ndendory",
    "Sinthiou Bamambé Banadji",
    "Hamady Hounaré",
    "Aouré",
    "Bokiladji",
    "Orkadiéré",
    "Ouaoundé",
    "Semmé",
    "Dembancané"
  ];
  communeRanerou: string[] = [
    "Ranérou",
    "Lougré Thioly",
    "Oudalaye",
    "Vélingara"
  ];
  communeKedougou: string[] = [
    "Kédougou",
    "Ninéfécha",
    "Bandafassi",
    "Tomboroncoto",
    "Dindefelo",
    "Fongolimbi",
    "Dimboli"
  ];
  communeSalemata: string[] = [
    "Salémata",
    "Kévoye",
    "Dakatéli",
    "Ethiolo",
    "Oubadji",
    "Dar salam"
  ];
  communeSaraya: string[] = [
    "Saraya",
    "Bembou",
    "Médina Baffé",
    "Sabodala",
    "Khossanto",
    "Missirah Sirimana"
  ];
  communeTambacounda: string[] = [
    "Tambacounda",
    "Niani Toucouleur",
    "Makacolibantang",
    "Ndoga Babacar",
    "Missirah",
    "Néttéboulou",
    "Dialacoto",
    "Sinthiou Malème",
    "Sinthiou Malème"
  ];
  communeGoudiry: string[] = [
    "Goudiry",
    "Boynguel Bamba",
    "Sinthiou Mamadou Boubou",
    "Koussan",
    "Dougué",
    "Dianké Makha",
    "Boutoucoufara",
    "Bani Israel",
    "Sinthiou Bocar Aly",
    "Koulor",
    "Bala",
    "Koar",
    "Goumbayel"
  ];
  communeBakel: string[] = [
    "Bakel",
    "Bélé",
    "Sinthiou Fissa",
    "Kidira",
    "Toumboura",
    "Sadatou",
    "Madina Foulbé",
    "Gathiary",
    "Gathiary",
    "Ballou",
    "Gabou",
    "Diawara"
  ];
  communeKoumpentoum: string[] = [
    "Koumpentoum",
    "Ndame",
    "Méréto",
    "Kahène",
    "Bamba Thialène",
    "Payar",
    "Kouthiaba Wolof",
    "Kouthia Gaydi",
    "Pass Coto",
    "Malem Niany"
  ];
  communeKolda: string[] = [
    "Kolda",
    "Dialambéré",
    "Médina Chérif",
    "Mampatim",
    "Coumbacara",
    "Coumbacara",
    "Bagadadji",
    "Dabo",
    "Thiétty",
    "Saré Bidji",
    "Guiro Yéro Bocar",
    "Dioulacolon",
    "Tankanto Escale",
    "Médina El hadj",
    "Salykégné",
    "Saré Yoba Diéga"
  ];
  communeMedinaYoroFoulah: string[] = [
    "Médina Yoro Foulah",
    "Badion",
    "Fafacourou",
    "Bourouco",
    "Bignarabé",
    "Ndorna",
    "Koulinto",
    "Niaming",
    "Dinguiraye",
    "Pata",
    "Kéréwane"
  ];
  communeVelingara: string[] = [
    "Vélingara",
    "Diaobé-Kabendou",
    "Kounkané",
    "Kandia",
    "Saré Coly Sallé",
    "Kandiaye",
    "Némataba",
    "Pakour",
    "Paroumba",
    "Ouassadou",
    "Bonconto",
    "Linkering",
    "Médina Gounass",
    "Sinthiang Koundara"
  ];
  communeSedhiou: string[] = [
    "Sédhiou",
    "Marssassoum",
    "Djiredji",
    "Bambaly",
    "Oudoucar",
    "Sama Kanta Peulh",
    "Diannah Ba",
    "Koussy",
    "Sakar",
    "Diendé",
    "Diannah Malary",
    "San Samba",
    "Bémet Bidjini",
    "Djibabouya"
  ];
  communeBounkiling: string[] = [
    "Bounkiling",
    "Ndiamacouta",
    "Boghal",
    "Tankon",
    "Ndiamalathiel",
    "Djinany",
    "Diacounda",
    "Inor",
    "Kandion Mangana",
    "Bona",
    "Diambati",
    "Faoune",
    "Diaroumé",
    "Madina Wandifa"
  ];
  communeGoudomp: string[] = [
    "Goudomp",
    "Diattacounda",
    "Samine",
    "Yarang Balante",
    "Mangaroungou Santo",
    "Simbandi Balante",
    "Djibanar",
    "Kaour",
    "Diouboudou",
    "Simbandi Brassou",
    "Baghère",
    "Niagh",
    "Tanaff",
    "Karantaba",
    "Kolibantang"
  ];
  communeZiguinchor: string[] = [
    "Ziguinchor",
    "Niaguis",
    "Adéane",
    "Boutoupa Camaracounda",
    "Niassia",
    "Enampore"
  ];
  communeBignona: string[] = [
    "Bignona",
    "Thionck Essyl",
    "Kataba 1",
    "Djinaky",
    "Kafountine",
    "Diouloulou",
    "Tenghori",
    "Niamone",
    "Ouonck",
    "Coubalan",
    "Balinghore",
    "Diégoune",
    "Kartiack",
    "Mangagoulack",
    "Mlomp",
    "Djibidione",
    "Oulampane",
    "Sindian",
    "Sindian"
  ];
  communeOussouye: string[] = [
    "Oussouye",
    "Diembéring",
    "Santhiaba Manjack",
    "Oukout",
    "Mlomp"
  ];
  constructor(private electeurService: ElecteurService,
  ) { }

  ngOnInit(): void {

  }
  new() {

    this.electeurService.createCirconsctiption(this.circonscription).subscribe(
      (data) => {
        console.log(data);
        this.electeur.circonscription = data;

      },
      (err) => {
        this.err = 1;
      }
    );
    // this.electeur.circonscription = this.circonscription;

    this.electeurService.create(this.electeur).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        this.err = 1;
      }
    );
  }

}
