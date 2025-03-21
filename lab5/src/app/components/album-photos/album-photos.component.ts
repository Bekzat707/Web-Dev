import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { AlbumsService, Photo } from '../../services/albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, NgFor], // Добавляем NgFor
  templateUrl: './album-photos.component.html'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = []; // Указываем тип

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    const albumIdStr = this.route.snapshot.paramMap.get('id');
    if (albumIdStr) {
      const albumId = Number(albumIdStr);
      this.albumsService.getPhotos(albumId).subscribe(data => {
        this.photos = data;
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}