import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  studentData: any=[];

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.studentService.studentList().subscribe(
      (allData) => {
        console.log(allData);
        this.studentData = allData;
      }
    );
  }

  deleteStudent(student_id: any){
   
this.studentService.deleteStudent(student_id).subscribe((result)=>{
 this.ngOnInit();

});
  }
}




