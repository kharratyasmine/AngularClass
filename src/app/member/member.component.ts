import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  nom='yasmine'
  dataSource=[{
    id :'12345' ,
    cin :'2215236',
    name:'yasmine',
    cv:'lien',
    type :'enseignant chercheur',
    createdData:'12/15/2015'

  } ,{
    id :'1' ,
    cin :'89898',
    name:'sousou',
    cv:'lien1',
    type :'enseignant ',
    createdData:'10/18/2023'
  }]
}
