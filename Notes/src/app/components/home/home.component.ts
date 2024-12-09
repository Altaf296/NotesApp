
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

note:Note[]=[];
constructor(
  private noteService:NoteService,
  private activatedRoute:ActivatedRoute, 
  private router:Router,
  private _snackbar:MatSnackBar
){}

ngOnInit() :void{
  this.note = this.noteService.getAll()
}
deleteNote(noteId:number):void{
  if(confirm("Do you want to delete?")){
    this.noteService.delete(noteId);
    this.openSnackBar("Note deleted Successfully !")
    window.location.reload();
  }else {
    return;
  }
}

openSnackBar(message: string) {
  this._snackbar.open(`${message}`, 'close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000,
  });
}
}
