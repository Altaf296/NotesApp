
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
note:Note[]=[];
constructor(private noteService:NoteService, private activatedRoute:ActivatedRoute, private router:Router){}

ngOnInit() :void{
  this.note = this.noteService.getAll()
}
deleteNote(noteId:number):void{
  if(confirm("Do you want to delete?")){
    this.noteService.delete(noteId);
    window.location.reload();
  }else {
    return;
  }
}
}
