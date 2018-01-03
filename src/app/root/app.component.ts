import { Component } from '@angular/core';
import {Reservation} from '../reservation';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	reservationList = Array<any>();

	constructor(){
		//Creating mock data
		var tempReservation = new Reservation();
		tempReservation.guestName = "Pablo Gusto";
		tempReservation.location = "Dining room";
		tempReservation.from = "12:00PM";
		tempReservation.to = "02:00PM";
		tempReservation.tableList = ["T2"];
		tempReservation.guestCount = 2;
		this.reservationList.push(tempReservation);

		tempReservation = new Reservation();
		tempReservation.guestName = "Walk in";
		tempReservation.location = "Dining room";
		tempReservation.from = "11:00AM";
		tempReservation.to = "01:00PM";
		tempReservation.tableList = ["T4", "T5"];
		tempReservation.guestCount = 5;
		this.reservationList.push(tempReservation);
	}
}
