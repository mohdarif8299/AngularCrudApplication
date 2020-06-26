import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/common/student';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student:Student = new Student('','','');
  students:Student[] = [];
  public deletedMsg:string ='';


  constructor(private studentService:StudentService, private router:ActivatedRoute,private route:Router) { }


  ngOnInit(): void {
    this.router.paramMap.subscribe(()=>{
      this.getAllStudents();
    })
  }
  getAllStudents() {
    this.studentService.getAllStudents().subscribe(
      data=>{
        this.students = data;
        data.forEach(element => {
          console.log(`This is `+element.name+element.email);
        });
      });
  }
  updateData(id:string,name:string,email:string):void {
    let student = new Student(id,name,email);
    this.studentService.setStudentData(student);
  }
  deleteStudent(id:string) {
    this.studentService.deleteStudent(id).subscribe(response=>{
     this.ngOnInit();
    },
    error=>{
      console.log(error);
      this.deletedMsg = error;
    }
    )
  }
  myFunction() {
  
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
}
