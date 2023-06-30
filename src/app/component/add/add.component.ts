import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {
  

  constructor(private studentService: StudentsService) {}

  addUser = new FormGroup(
  {
    name: new FormControl(''),
    email: new FormControl('')

  }
  );
  

  ngOnInit(): void {

  }

  formSubmitted(): void {
   //console.log(this.addUser.value)
   this.studentService.saveStudentData(this.addUser.value).subscribe((result)=>{
console.log(result)

   })
  }
}

