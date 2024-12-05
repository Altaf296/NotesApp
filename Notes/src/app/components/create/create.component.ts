import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-create',
  standalone: false,
  
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  newNote:Note ={
    id: 0,
    title: '',
    description:'',
    date:new Date(),
    color:''
  }
  constructor(
    private noteServices:NoteService, 
    private ActivatedRoute:ActivatedRoute, 
    private router:Router,
    private _snackBar :MatSnackBar
  ){}


createNew():void{
  console.log(this.newNote);
  this.noteServices.create(this.newNote);
  console.log(this.newNote);
  // open("Notes Created Successfully !");
  this.openSnackBar("Notes Created Successfully !")
  this.newNote ={
    id: 0,
    title: '',
    description:'',
    date:new Date(),
    color:''
  }
  this.router.navigate(['']);
}
  goBack(){
    this.router.navigate(['/home.component']);
  }

  openSnackBar(message: string) {
    this._snackBar.open(`${message}`, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
