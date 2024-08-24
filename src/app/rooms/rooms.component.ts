import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  rooms: any[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(
      (data) => {
        console.log(data); // Verifica los datos en la consola
        this.rooms = data;
      },
      (error) => {
        console.error('Error fetching rooms:', error); // Manejo de errores
      }
    );
  }
}
