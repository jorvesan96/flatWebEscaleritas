import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  rooms: any[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    // Suscríbete a los datos de las habitaciones
    this.roomService.getRooms().subscribe((data) => {
      this.rooms = data;
    });
  }
}
