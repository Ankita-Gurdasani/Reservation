import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	private date;
	private day;
	private dayNames = Array<any>();

	constructor() { 
		this.dayNames = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];
		this.date = new Date();
		this.day = this.dayNames[this.date.getDay()];
		this.date = this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear();
	}

	ngOnInit() {
	}
}
