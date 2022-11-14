import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  // subirArchivo(file: File) {
  //   return this.http.post<any>('http://localhost:3000/api/uploads/', file);
  // }

  getImg(id?: number, username?: string) {
    return this.http.get<any>(`http://localhost:3000/api/uploads/${[id, username]}`)
  }

  updAvatar(username: string, file: File) {
    return this.http.put<any>(`http://localhost:3000/api/uploads/${username}`, file)
  }
}
