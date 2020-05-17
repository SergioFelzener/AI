import { Component, OnInit } from '@angular/core';
import { TimezoneOptions } from '../../model/timezone-options';
import { TimezoneService } from '../../services/timezone.service';
import { Timezone } from '../../model/timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})

export class TimezoneComponent implements OnInit {
  timezoneOptions: Array<TimezoneOptions>;
  selectedTimezone: string;
  timezoneData: Timezone;
  data: any;

  constructor(private timezoneService: TimezoneService) { }

  ngOnInit(): void {
    this.listOptions();
  }

  listOptions() {
    this.timezoneService.getAllTimezones().subscribe((timezones) => {
      this.timezoneOptions = timezones;
    });
  }

  getTimezone() {
    this.timezoneService.getSelectedTimezone(this.selectedTimezone).subscribe(timezone => {
      this.timezoneData = timezone;
      this.data = this.timezoneData.datetime;
    });
  }
}

