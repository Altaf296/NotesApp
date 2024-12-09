import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-edit',
  standalone: false,
  
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  noteId:number|any;
  note:Note |any;
  constructor(
    private noteService:NoteService, 
    private activatedRoute:ActivatedRoute, 
    private router:Router,
    private _snackbar:MatSnackBar
  ){

  }
  ngOnInit():void{
    this.activatedRoute.params.subscribe(params =>{
      this.noteId = params['id'];
      console.log(this.noteId);
      if(this.noteId >=0){
        this.note = this.noteService.get(this.noteId);
        console.log(this.note);
      }else{
        //console.log('Something Went Wrong')
        //this.openSnackBar("Notes updated Successfully !")
      }
    });
  }
  update():void{
    this.noteService.update(this.note);
    this.router.navigate(['']);
    this.openSnackBar("Notes updated Successfully !")
    //alert("record has been updated!")
    
  }
  goback(){
    this.router.navigate([''])
  }

  openSnackBar(message: string) {
    this._snackbar.open(`${message}`, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
