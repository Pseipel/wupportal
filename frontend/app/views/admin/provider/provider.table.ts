import { Component, Inject, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Location } from '@angular/common';

import { DataServiceFactory } from 'app/services/data.service.factory';
import { DataService } from 'app/services/data.service';
import { AbstractTableComponent } from 'app/views/admin/table.abstract';
import { ProviderService } from 'app/services/provider.service';
import { Provider } from 'app/models/provider';
import { Constants } from 'app/services/constants';
import { User } from 'app/models/user';

@Component({
	selector: 'provider-table',
	styleUrls: ['../table.abstract.css', '../admin.area.css', '../../../app.component.css'],
	templateUrl: 'provider.table.html'
})
export class ProviderTableComponent implements OnChanges {

	@Input() providers: Array<Provider>;

	protected displayedColumns: Array<string> = ['username', 'fullname', 'phone', 'admin', 'delete'];
	dataSource: MatTableDataSource<Provider> = new MatTableDataSource<Provider>();
	public isLoading: boolean = false;

	constructor(
		protected dataService: ProviderService,
		protected constants: Constants,
		private location: Location) {
	}

	ngOnChanges(changes: SimpleChanges): void {
		const providers: SimpleChange = changes.providers;
		this.dataSource.data = providers.currentValue;
	}

	save(): void {
		this.isLoading = true;
		const editObservables = this.dataSource.data.map(provider => this.dataService.edit(provider));
		forkJoin(editObservables).subscribe(() => this.isLoading = false,
			() => this.isLoading = false,
			() => this.isLoading = false);
	}

	onDelete(recordID: string): void {
		this.isLoading = true;
		this.dataService
			.delete(recordID)
			.subscribe(() => {
				this.dataSource.data =
					this.dataSource.data.filter(provider => provider.id !== recordID);
				this.isLoading = false;
			});
	}

	back(): void {
		this.location.back();
	}

}
