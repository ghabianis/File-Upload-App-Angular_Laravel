import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

   postImage(data:any){
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl+'/api/file',data ,{
      headers:headers
    });
   }

   getImage(){
     return this.http.get(environment.apiurl+'/api/getfile');
   }
}
