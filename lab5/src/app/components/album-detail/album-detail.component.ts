import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../../services/albums.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album: Album = { id: 0, title: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbum(id).subscribe(data => this.album = data);
  }

  saveAlbum() {
    this.albumsService.updateAlbum(this.album).subscribe();
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}