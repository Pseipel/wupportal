import { AngularOpenlayersModule } from 'ngx-openlayers';

import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// HttpModule is deprecated
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
	MatButtonModule,
	MatPaginatorIntl,
	MatSidenavModule,
	MatSnackBar,
	MatSnackBarModule,
	MatCardModule,
	MatExpansionModule,
	MatIconModule,
	MatTabsModule,
	MatSelectModule,
	MatPaginatorModule,
	MatFormFieldModule,
	MatSortModule,
	MatDialogModule,
	MatTableModule,
	MatChipsModule,
	MatListModule,
	MatDatepickerModule,
	MatCheckboxModule,
	MatStepperModule,
	MatGridListModule,
	MatAutocompleteModule,
	MatInputModule,
	MatSlideToggleModule,
	MatToolbarModule
} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from 'app/app.component';
import { AppRouterModule } from 'app/app-router.module';

import { UserTableComponent } from 'app/views/admin/users/user.table';
import { ActivityTableComponent } from 'app/views/admin/activities/activity.table';
import { OrganisationsTableComponent } from 'app/views/admin/organisations/organisation.table';
import { ProviderTableComponent } from 'app/views/admin/provider/provider.table';
import { ProviderApprovalTableComponent } from 'app/views/admin/provider/provider-approval.table';
import { ProviderRequestTableComponent } from 'app/views/admin/provider/provider-request.table';

import { LoginFormComponent } from 'app/views/admin/login/login.form';
import { AdminComponent } from 'app/views/admin/admin.component';
import { UserFormComponent } from 'app/views/admin/users/user.form';
import { OrganisationFormComponent } from 'app/views/admin/organisations/organisation.form';
import { OrganisationUpdateComponent } from 'app/views/admin/organisations/organisation.update';
import { OrganisationAdminComponent } from 'app/views/admin/organisations/organisation.admin';
import { ActivityFormComponent } from 'app/views/admin/activities/activity.form';
import { RegisterFormComponent } from 'app/views/admin/users/register.form';

import { ActivityService } from 'app/services/activity.service';
import { ProviderService } from 'app/services/provider.service';
import { UserService } from 'app/services/user.service';
import { TranslationService } from 'app/services/translation.service';
import { AuthGuardService } from 'app/services/authguard.service';
import { LocationService } from 'app/services/location';
import { NominatimService } from 'app/services/nominatim';
import { ValidationService } from 'app/services/validation.service';
import { Constants } from 'app/services/constants';
import {
	DataServiceFactory,
	TagService,
	TargetGroupService,
	OrganisationService,
	AddressService,
	ScheduleService,
	SuburbService,
	CategoryService,
	ConfigurationService,
	ForgotPasswordService
} from 'app/services/data.service.factory';

import { SuburbSelectionComponent } from 'app/views/admin/dialog/popup.suburb.selection';
import { AddressCreateFormComponent } from 'app/views/admin/addresses/address.create.form';
import { AddressFormComponent } from 'app/views/admin/addresses/address.form';
import { AddressTableComponent } from 'app/views/admin/addresses/address.table';

import { ConfigFormComponent } from 'app/views/admin/configs/config.form';
import { TargetGroupListComponent } from './views/admin/configs/targetgroup.list';
import { TargetGroupFormComponent } from './views/admin/configs/targetgroup.form';
import { TagListComponent } from './views/admin/configs/tag.list';
import { TagFormComponent } from './views/admin/configs/tag.form';
import { CategoryListComponent } from './views/admin/configs/category.list';
import { CategoryFormComponent } from './views/admin/configs/category.form';
// import { TranslatableConfigComponent } from './views/admin/configs/translatable.config';

import { DeleteDialogComponent } from 'app/views/admin/dialog/delete.dialog';
import { DeleteActionComponent } from 'app/views/admin/actions/delete.action';
import { OrganisationSelectionComponent } from 'app/views/admin/dialog/organisation-selection.dialog';
import { NewScheduleDialogComponent } from 'app/views/admin/dialog/scheduler.new.entry';
import { AddressAutocompleteComponent } from 'app/views/admin/addresses/address.autocomplete';

import { PaginatorLabels } from 'app/views/admin/table/paginator.labels';

import { ActivityDetailComponent } from 'app/views/admin/activities/activity.detail';
import { OrganisationDetailComponent } from 'app/views/admin/organisations/organisation.detail';
import { SchedulerComponent } from 'app/views/admin/schedules/scheduler.component';
import { ForgottenPasswordFormComponent } from './views/admin/users/forgotten.password';
import { TranslatableFieldsComponent } from './views/admin/translations/translatable.form';

@NgModule({
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent,

		AddressAutocompleteComponent,
		SchedulerComponent,

		UserTableComponent,
		OrganisationsTableComponent,
		AddressTableComponent,
		ActivityTableComponent,
		ProviderTableComponent,
		ProviderApprovalTableComponent,
		ProviderRequestTableComponent,

		LoginFormComponent,
		RegisterFormComponent,
		ForgottenPasswordFormComponent,
		AdminComponent,
		ActivityFormComponent,
		OrganisationFormComponent,
		OrganisationUpdateComponent,
		OrganisationAdminComponent,
		UserFormComponent,

		ActivityDetailComponent,
		OrganisationDetailComponent,

		SuburbSelectionComponent,
		AddressCreateFormComponent,
		AddressFormComponent,
		ConfigFormComponent,
		TargetGroupFormComponent,
		TargetGroupListComponent,
		TagFormComponent,
		TagListComponent,
		CategoryFormComponent,
		CategoryListComponent,
		DeleteDialogComponent,
		DeleteActionComponent,
		OrganisationSelectionComponent,
		TranslatableFieldsComponent,
		NewScheduleDialogComponent
	],
	imports: [
		AngularOpenlayersModule,
		// HttpModule is deprecated
		HttpModule,
		HttpClientModule,

		BrowserAnimationsModule,
		BrowserModule,
		AppRouterModule,

		MatButtonModule,
		MatExpansionModule,
		MatCardModule,
		MatIconModule,
		MatFormFieldModule,
		MatTableModule,
		MatSortModule,
		MatTabsModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		MatAutocompleteModule,
		MatPaginatorModule,
		MatDialogModule,
		MatChipsModule,
		MatListModule,
		MatDatepickerModule,
		MatMomentDateModule,
		MatTooltipModule,
		MatRadioModule,
		MatCheckboxModule,
		MatStepperModule,
		MatGridListModule,
		MatSidenavModule,
		MatAutocompleteModule,
		MatInputModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		FontAwesomeModule,
		MatSlideToggleModule,
		MatToolbarModule
	],
	providers: [
		AuthGuardService,
		ActivityService,
		ProviderService,
		UserService,
		LocationService,
		NominatimService,
		Title,
		TranslationService,
		TranslatableFieldsComponent,
		Constants,
		ValidationService,
		{ provide: MatPaginatorIntl, useClass: PaginatorLabels },
		{
			provide: OrganisationService, useFactory: DataServiceFactory(OrganisationService),
			deps: [HttpClient, UserService, MatSnackBar]
		},
		{
			provide: AddressService, useFactory: DataServiceFactory(AddressService),
			deps: [HttpClient, UserService, MatSnackBar]
		},
		{
			provide: SuburbService, useFactory: DataServiceFactory(SuburbService),
			deps: [HttpClient, UserService, MatSnackBar]
		},
		{
			provide: ConfigurationService, useFactory: DataServiceFactory(ConfigurationService),
			deps: [HttpClient, UserService, MatSnackBar]
		},
		{
			provide: TagService, useFactory: DataServiceFactory(TagService),
			deps: [HttpClient, UserService, MatSnackBar]
		},
		{
			provide: TargetGroupService, useFactory: DataServiceFactory(TargetGroupService),
			deps: [HttpClient, UserService, MatSnackBar]
		},
		{
			provide: CategoryService, useFactory: DataServiceFactory(CategoryService),
			deps: [HttpClient, UserService, MatSnackBar]
		},
		{
			provide: ScheduleService, useFactory: DataServiceFactory(ScheduleService),
			deps: [HttpClient, UserService, MatSnackBar]
		},
		{
			provide: ForgotPasswordService, useFactory: DataServiceFactory(ForgotPasswordService),
			deps: [HttpClient, UserService, MatSnackBar]
		}
	],
	entryComponents: [
		SuburbSelectionComponent,
		AddressCreateFormComponent,
		DeleteDialogComponent,
		OrganisationSelectionComponent,
		NewScheduleDialogComponent
	], exports: [
	]
})

export class AppModule { }
