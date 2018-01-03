import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../reservation';

@Component({
	selector: 'app-reservation',
	templateUrl: './reservation.component.html',
	styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

	@Input() reservationList = Array<Reservation>();

	constructor() {
		
	}


	ngOnInit() {
	}
}
