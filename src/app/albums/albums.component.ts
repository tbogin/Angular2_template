import { Component, OnInit } from '@angular/core';
import { Album } from './album';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] //set a variable for the Album[] observable created in albums.service

  constructor( private albumsService: AlbumsService ) { }

  ngOnInit() {
    this.albumsService.getAlbums()
      .subscribe(data => this.albums = data)
  }

}

//Create album service that gets albums from API
//Inject album service into constructor, and initiate album getting within ngOnInit