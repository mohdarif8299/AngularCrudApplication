import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/common/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public form:FormGroup;
  public studentAddedd:string = '';

  constructor(public formBuilder:FormBuilder,private studentService:StudentService) {
    this.form = this.formBuilder.group({
      name:[''],
      email:['']
    })
   }

  ngOnInit(): void {
  }
  submitForm() {
    let student:Student = new Student('',this.form.get('name').value,this.form.get('email').value);
    this.studentService.addStudent(student) .subscribe(respone=> {
      if(respone !=null) {
        this.form.get('name').setValue('');
        this.form.get('email').setValue('');
        this.studentAddedd = 'Student Added Successfully';
        console.log(respone)
      }
    },
     error=>console.log(error));
  }

}
