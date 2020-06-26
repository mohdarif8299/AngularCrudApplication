import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/common/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student:Student;
  success:string = '';

  public form:FormGroup;
  constructor(public formBuilder:FormBuilder,private studentService:StudentService) {
    this.form = this.formBuilder.group({
      name:[''],
      email:['']
    })
   }

  ngOnInit(): void {
    this.student = this.studentService.getStudentData();
    this.form.get('name').setValue(this.student.name);
    this.form.get('email').setValue(this.student.email);
  }

  submitForm() {
    let student:Student = new Student(this.student.id,this.form.get('name').value,this.form.get('email').value);
    this.studentService.updateStudent(student).subscribe(respone=> {
      if(respone !=null) {
        this.success = 'User Updated';
        console.log(respone)
      }
    },
     error=>console.log(error));
  }

}
