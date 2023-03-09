import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentResponse } from './student-chart.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeChartService {

  private baseURL: string = 'https://localhost:44314/api/EmployeeChart/';
  constructor(private _http:HttpClient) { }

  public question1(Id:any)  {
   
    return this._http.get<any[]>(this.baseURL + 'GetchartQ1/' + Id);
  }
  public question2(Id:any)  {
   
    return this._http.get<any[]>(this.baseURL + 'GetchartQ2/' + Id );
  }
  public question3(Id:any)  {
   
    return this._http.get<any[]>(this.baseURL + 'GetchartQ3/' + Id );
  }
  public question4(Id:any) {
    return this._http.get<any[]>(this.baseURL + 'GetchartQ4/' + Id);
  }
  public question5(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ5/' + Id);
  }
  public question6(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ6/' + Id);
  }
  public question7(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ7/' + Id);
  }
  public question8(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ8/' + Id);
  }
  public question9(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ9/' + Id);
  }
  public question10(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ10/' + Id);
  }
  public question11(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ11/'+ Id );
  }
  public question12(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ12/' + Id);
  }
  public question13(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ13/' + Id);
  }
  public question14(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ14/' + Id);
  }
  public question15(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ15/' + Id);
  }
  public question16(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ16/' + Id);
  }
  public question17(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ17/' + Id);
  }
  public question18(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ18/' + Id);
  }
  public question19(Id:any){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ19/' + Id);
  }
 
}
