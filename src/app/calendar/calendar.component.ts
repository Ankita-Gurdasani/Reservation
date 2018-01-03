import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Reservation} from '../reservation';
@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

	@Input() reservationList = Array<Reservation>();
	private reservationLocation1 = "";
	private reservationLocation2 = "";
	private reservationLocation3 = "";
	private locations = {};
	private timeSlots = {};
	private tables = {};
	private timeSlotsContent = Array<any>();

	constructor() {

		//Mapping labels to indexes
		this.locations = {
			"Dining room": 0,
			"Lounge & Bar": 1,
			"Functions": 2
		}

		this.timeSlots = {
			"11:00AM": 1,
			"12:00PM": 2,
			"01:00PM": 3,
			"02:00PM": 4,
			"03:00PM": 5,
			"04:00PM": 6,
			"05:00PM": 7,
			"06:00PM": 8,
			"07:00PM": 9,
			"08:00PM": 10,
			"09:00PM": 11
		}

		this.tables = {
			"T1": 0,
			"T2": 1,
			"T3": 2,
			"T4": 3,
			"T5": 4,
			"T6": 5,
			"T7": 6,
			"T8": 7,
			"T9": 8,
			"T10": 9,
			"T11": 10,
			"T12": 11,
			"T13": 12,
			"T14": 13,
			"T15": 14
		}
	}


	ngOnInit() {
		this.setReservationInTable();

		this.reservationLocation1 = '<tr><td class="reservation-location" colspan="12">Dining room</td></tr>';
		this.reservationLocation2 = '<tr><td class="reservation-location" colspan="12">Lounge & Bar</td></tr>';
		this.reservationLocation3 = '<tr><td class="reservation-location" colspan="12">Functions</td></tr>';

		for(var row = 0; row < 5; row++){
			this.reservationLocation1 += '<tr>';

			for(var column = 0; column < this.timeSlotsContent[row].length; column++){
				this.reservationLocation1 += this.timeSlotsContent[row][column];
			}

			this.reservationLocation1 += '</tr>';
		} 

		for(var row = 5; row < 10; row++){
			this.reservationLocation2 += '<tr>';

			for(var column = 0; column < this.timeSlotsContent[row].length; column++){
				this.reservationLocation2 += this.timeSlotsContent[row][column];
			}

			this.reservationLocation2 += '</tr>';
		} 

		for(var row = 10; row < 15; row++){
			this.reservationLocation3 += '<tr>';

			for(var column = 0; column < this.timeSlotsContent[row].length; column++){
				this.reservationLocation3 += this.timeSlotsContent[row][column];
			}

			this.reservationLocation3 += '</tr>';
		} 
	}	


	setReservationInTable(){
		//Creating base table layout for calendar
		for(var row = 0; row < 15; row++){
			var tr = Array<any>();

			for(var column = 0; column < 12; column++){
				if(column == 0){
					tr.push('<td class="timeslot">T' + (row+1).toString() + '</td>');
				} else {
					tr.push('<td class="timeslot">&nbsp;</td>');
				}
			}

			this.timeSlotsContent.push(tr);
		} 

		//Inserting each reservation into calendar table
		this.reservationList.forEach(reservation => {
			var td = '<td class="timeslot-reservation" rowspan="' + reservation.tableList.length + ' "colspan="' + (this.timeSlots[reservation.to] - this.timeSlots[reservation.from]) + '"><span style="overflow-x: hidden">' + reservation.guestName + '</span></td>'

			reservation.tableList.forEach(table => {
				if(table == reservation.tableList[0]){
					this.timeSlotsContent[this.tables[table]].splice(this.timeSlots[reservation.from], this.timeSlots[reservation.to] - this.timeSlots[reservation.from], td);
				} else {
					this.timeSlotsContent[this.tables[table]].splice(this.timeSlots[reservation.from], this.timeSlots[reservation.to] - this.timeSlots[reservation.from]);
				}
			});
		});
	}
}
