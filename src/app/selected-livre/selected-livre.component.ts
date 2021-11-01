import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'; 
import { Livre } from '../model/livre';
import { LivreService } from '../services/livre.service';
@Component({
  selector: 'app-selected-livre',
  templateUrl: './selected-livre.component.html',
  styleUrls: ['./selected-livre.component.css']
})
export class SelectedLivreComponent implements OnInit {
identifiant:number=0;
livre:Livre=new Livre(0,"","","",0,true);
constructor(private activatedRoute:ActivatedRoute,private router:Router,private livreService:LivreService) { }  


  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id']; 
    this.livre=this.livreService.getLivresById(this.identifiant);
  }

  onRetour()
  {
   this.router.navigate(['/listlivres']);
  }
}
