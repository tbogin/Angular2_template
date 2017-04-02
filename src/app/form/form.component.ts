import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  posts = []

  constructor() { }

  ngOnInit() {
  }

  addPost(newPost: String){
    if (newPost){
      this.posts.push(newPost)
    }
  }

}
