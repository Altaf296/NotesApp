import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  noteId:number|any;
  note:Note |any;
  constructor(private noteService:NoteService, private activatedRoute:ActivatedRoute, private router:Router){

  }
  ngOnInit():void{
    this.activatedRoute.params.subscribe(params =>{
      this.noteId = params['id'];
      console.log(this.noteId);
      if(this.noteId >=0){
        this.note = this.noteService.get(this.noteId);
        console.log(this.note);
      }else{
        console.log('Something Went Wrong')
      }
    });
  }
  update():void{
    this.noteService.update(this.note);
    this.router.navigate(['']);
    open("record has been updated!")
  }
  goback(){
    this.router.navigate(['/home'])
  }
}