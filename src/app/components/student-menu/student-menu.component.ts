import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/common/student';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent implements OnInit {

  student:Student = new Student('','','');
  students:Student[] = [];


  constructor(private studentService:StudentService, private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

//   getAllProducts() {
//     this.router.paramMap.subscribe(()=>{
//       this.handleProductList();
//     })
//   }

//  handleProductList() {
//     const theProductId :number = +this.router.snapshot.paramMap.get("id");
//     this.studentService.getStudentById(theProductId).subscribe(
//       data=>{
//         this.student = data;
//         console.log(`This is `+data);
//       }
//     )
//     this.studentService.getAllStudents().subscribe(
//       data=>{
//         this.students = data;
//         data.forEach(element => {
//           console.log(`This is `+element.name+element.email);
//         });
//       });
//   }

}
