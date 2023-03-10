import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.scss']
})
export class BoardUserComponent implements OnInit {
  foods: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.foods = data;
      },
      error: err => {
        this.foods = JSON.parse(err.error).message;
      }
    });
  }
}
