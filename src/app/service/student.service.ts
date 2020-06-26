import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../common/student';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/students";
  
  student:Student;

  constructor(private httpClient:HttpClient) {

   }

   getAllStudents():Observable<Student[]> {
    const studentUrl = `${this.baseUrl}`;
    return this.httpClient.get<GetResponse>(studentUrl).pipe(map(response=>response._embedded.student));
   }
   getStudentById(theId:number) :Observable<Student> {
    
    const studentUrl = `${this.baseUrl}/${theId}`;
    return this.httpClient.get<Student>(studentUrl);

   }
   addStudent(student:Student) :Observable<any>{
    const studentUrl = `${this.baseUrl}/`;
    console.log(JSON.stringify(student));
   return  this.httpClient.post(studentUrl,JSON.stringify(student),{headers:{'Content-Type':'application/json; charset=utf-8'}})
   }
   updateStudent(student:Student) :Observable<any> {
    const studentUrl = `${this.baseUrl}/`+student.id+`/`;
    console.log(JSON.stringify(student));
    return this.httpClient.put(studentUrl,JSON.stringify(student),{headers:{'Content-Type':'application/json; charset=utf-8'}});   
   }
   setStudentData(student:Student) {
     this.student = student;
   }
   getStudentData():Student {
     return this.student;
   }
   deleteStudent(id:string) :Observable<any>{
    const studentUrl = `${this.baseUrl}/`+id+`/`;
    return this.httpClient.delete<Student>(studentUrl);   
   
   }

}
interface GetResponse{
  _embedded:{
    student:Student[];
  }
}
