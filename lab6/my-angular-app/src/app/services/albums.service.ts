import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  // Получить все альбомы
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Создать новый альбом
  createAlbum(album: { title: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, album);
  }

  // Удалить альбом
  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Обновить альбом
  updateAlbum(id: number, album: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, album);
  }
}