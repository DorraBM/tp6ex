import { Injectable } from '@angular/core';
import { Livre } from '../model/livre';
@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private livres: Livre[]=[     
    new Livre (1, '17 ramadan', 'Gorgi Zaydane', 'historique', 4.3, false),     
    new Livre (2, 'pivoine', 'Pearl Buck', 'roman', 24.2, false),    
    new Livre (3, 'Vent d\'Est Vent d\'Ouest', 'Pearl Buck', 'roman', 25.3, true),     
    new Livre (4, 'La tresse', 'Laetitia Colombani', 'roman', 18.6, false),     
    new Livre (6, 'Haroun Erachid', 'Gorgi Zaydane', 'historique', 5.8, false),     
    new Livre (7, 'Terre chinoise', 'Pearl Buck', 'roman', 26.4, true) 
]; 
 getLivres()
 {
   return this.livres;
 }
 getLivresById(id:number)
 {
return this.livres.find(element=>element.id== id);
 }
 getLivresByCategorie (categ : string) 
 { return this.livres.filter(element=>element.categorie==categ);

 }
  constructor() { }
}
