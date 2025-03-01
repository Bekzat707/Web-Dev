import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  // Загрузить альбомы
  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        console.log('Albums loaded:', data); // Логируем данные для проверки
      },
      error: (err) => {
        console.error('Error loading albums:', err); // Логируем ошибку, если она есть
      },
    });
  }

  // Добавить новый альбом
  addAlbum(): void {
    if (!this.newAlbumTitle.trim()) return; // Проверка на пустую строку

    const newAlbum = { title: this.newAlbumTitle };
    this.albumsService.createAlbum(newAlbum).subscribe({
      next: (album) => {
        this.albums.push(album); // Добавляем новый альбом в массив
        this.newAlbumTitle = ''; // Очищаем поле ввода
      },
      error: (err) => {
        console.error('Error adding album:', err); // Логируем ошибку, если она есть
      },
    });
  }

  // Удалить альбом
  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== id);
      },
      error: (err) => {
        console.error('Error deleting album:', err);
      },
    });
  }

  // Перейти к деталям альбома
  viewAlbumDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}