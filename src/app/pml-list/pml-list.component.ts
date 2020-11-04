import { Component, OnInit } from '@angular/core';
import {PMLService} from 'src/app/shared/pml.service'

@Component({
  selector: 'app-pml-list',
  templateUrl: './pml-list.component.html',
  styleUrls: ['./pml-list.component.css']
})
export class PMLListComponent implements OnInit {
  PML : Array<any>;

  constructor(private pmlService: PMLService) { }

  ngOnInit(): void {
  this.pmlService.getAll().subscribe(data =>{
    this.PML = data;
  });
  }

}
