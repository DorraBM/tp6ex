import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre';
import { LivreService } from '../services/livre.service';
@Component({
  selector: 'app-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css']
})
export class ListlivresComponent implements OnInit {
  listtab:Livre[]=[];
  Tous()
  {this.listtab=this.livreService.getLivres();

  }
  Romans()
  {
    this.listtab=this.livreService.getLivresByCategorie("roman");
  }
  Historique()
  {
    this.listtab=this.livreService.getLivresByCategorie("historique");
  }
  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
    this.listtab=this.livreService.getLivres();
  }

}
