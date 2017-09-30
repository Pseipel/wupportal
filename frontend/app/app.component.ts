import { Component, OnInit } from '@angular/core';
import { MapBrowserEvent, Feature } from 'openlayers';

import { ActivityService } from './services/activity.service';
import { ConfigurationService } from './services/configuration.service';
import { Service } from './services/service';

import { Activity } from './models/activity';
import { Configuration } from './models/configuration';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [Service, ConfigurationService, ActivityService]
})

export class AppComponent { }
