import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

	// --------------------------
	// SERVER MESSAGES
	// --------------------------

	public static wrongCredentialsMessage: string = 'Kein Nutzer mit diesem Password gefunden';
	public static duplicateEntryMessage: string = 'Datensatz mit dem Namen existiert bereits. Bitte anderen Namen auswählen';
	public static notFoundMessage: string = 'Kein Datensatz zu den Suchkriterien gefunden';
	public static wrongInputFormatMessage: string = 'Format der Eingabefelder sind nicht korrekt';
	public static serviceNotAvailable: string = 'Automatische Übersetzung nicht verfügbar. Bitte bei Bedarf manuell übersetzen.';
	public static unexpectedErrorMessage: string = 'Unerwarteter Serverfehler. Bitte erneut probieren oder Codeschluss kontaktieren';
	public static successfulActionMessage: string = 'Aktion wurde erfolgreich ausgeführt';

	public static SHORT: number = 2000;
	public static MIDDLE: number = 7000;
	public static LONG: number = 99999;

	// --------------------------
	// STATIC
	// --------------------------
	public static close: string = 'Schließen';
	public static nextPageLabel: string = 'Nächste Seite';
	public static previousPageLabel: string = 'Vorherige Seite';
	public static itemsPerPageLabel: string = 'Einträge pro Seite';
	public static of: string = 'von';
	public static error: string = 'Fehler';

	// --------------------------
	// LABELS
	// --------------------------

	public weekDaysArray: string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
	public rythm: string = 'Rythmus';
	public from: string = 'von';
	public to: string = 'bis';
	public at: string = 'am';
	public unique: string = 'einmalig';
	public noRecurrentActivity: string = 'Ihre Veranstaltung ist keine wiederholende Veranstaltung';
	public rythmInfo: string[] = ['Beispiele zu den Rythmen',
		'Täglich: Im Abstand von 3 Tagen finden Veranstaltungen statt.',
		'Werktags: Die Veranstaltung soll jede Woche an Werktagen stattfinden.',
		'Wöchentlich: Die Veranstaltung findet immer Mittwochs und Donnerstags im Abstand von 2 Wochen statt.',
		'Monatlich 1: Die Veranstaltung findet alle 2 Monate am letzten Mittwoch des Monats statt.',
		'Monatlich 2: Die Veranstaltung findet jeden zweiten Monat am 12ten Tag des Monats statt.',
		'Jährlich: Die Veranstaltung findet jedes Jahr am 1. März statt'];
	public day: string = 'Tag';
	public week: string = 'Woche';
	public month: string = 'Monat';
	public year: string = 'Jahr';
	public daily: string = 'täglich';
	public weekly: string = 'wöchentlich';
	public weekdays: string = 'Wochentage';
	public monthly: string = 'monatlich';
	public yearly: string = 'jährlich';
	public defaultCountryCode: string = 'de';
	public defaultLanguage: string = 'Deutsch';
	public chooseLanguage: string = 'Sprachauswahl';
	public translations: string = 'Übersetzungen';

	public cssColorNames: String[] = [
		'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple',
		'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua',
		'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond',
		'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate',
		'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan',
		'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta',
		'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
		'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink',
		'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen',
		'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink',
		'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon',
		'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey',
		'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
		'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta', 'mediumaquamarine', 'mediumblue',
		'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
		'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab',
		'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff',
		'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown',
		'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
		'springgreen', 'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen', 'rebeccapurple'
	];



	public back: string = 'Zurück';
	public newElement: string = 'Neu';
	public cancel: string = 'Abbrechen';
	public newEntry: string = 'Neuen Eintrag anlegen';

	public login: string = 'anmelden';
	public loginTitle: string = 'Login';
	public register: string = 'registrieren';
	public userName: string = 'Benutzername';
	public password: string = 'Passwort';
	public newPassword: string = 'Neues Passwort';
	public confirmPassword: string = 'Passwort wiederholen';
	public registration: string = 'Registrierung';

	public filter: string = 'Filter';
	public configuration: string = 'Einstellungen';

	public requests: string = 'Anfragen';
	public showMembers: string = 'Mitglieder anzeigen';
	public showRequests: string = 'Anfragen anzeigen';
	public declineRequest: string = 'Anfrage ablehnen';
	public approveRequest: string = 'Anfrage bestätigen';
	public createdAt: string = 'Erstellt';
	public save: string = 'Speichern';
	public select: string = 'Auswählen';
	public delete: string = 'Löschen';
	public deleteAll: string = 'Alle Einträge löschen';
	public change: string = 'Ändern';
	public edit: string = 'Bearbeiten';
	public chosen: string = 'Ausgewählt';
	public choose: string = 'wählen Sie';
	public create: string = 'Erstelle';
	public calculate: string = 'Errechne';
	public frequently: string = 'Regelmäßig';
	public next: string = 'weiter';
	public previous: string = 'vorherige';
	public approved: string = 'Bestätigt';

	public coreData: string = 'Stammdaten';
	public metaData: string = 'Weitere Angaben';
	public own: string = 'Eigene';
	public no: string = 'Nein';
	public yes: string = 'Ja';
	public ok: string = 'OK';
	public required: string = 'notwendig';

	public deleteMessage: string = 'Möchten Sie den folgenden Eintrag wirklich löschen?';
	public isRequiredMessage: string = 'Feld darf nicht leer sein';
	public isRequiredMessageLong: string = 'Mindestens eins der vorhandenen Felder dieser Ansicht ist leer, obwohl es das nicht sein dar.';
	public emailFormatMessage: string = 'Feld muss Email Format haben';
	public notSamePasswordMessage: string = 'Passwörter stimmen nicht überein';
	public forgottenPassword: string = 'Passwort vergessen?';
	public enterYourMail: string = 'Bitte geben Sie Ihre Email Adresse ein';
	public resetPassword: string = 'Passwort zurück setzen';
	public orAreEmptyMessage: string = 'oder sind leer';
	public endBeforeStartError: string = 'Ende liegt vor Beginn';
	public endBeforeStartErrorLong: string = 'Die eingegebene Endzeit (Datum oder Uhrzeit) liegt vor der Startzeit (Datum oder Uhrzeit)';
	public timeQuestion: string = 'Zu welcher Uhrzeit beginnt und endet die Veranstaltung?';
	public calendarQuestion: string = 'An welchem Tag beginnt bzw. endet die Veranstaltung(sreihe)?';
	public recurrenceQuestion: string = 'In welchem Rythmus wiederholt sich die Veranstaltung?';
	public begin: string = 'Anfang';
	public end: string = 'Ende';
	public startTime: string = 'Startzeit';
	public endTime: string = 'Endzeit';
	public last: string = 'letzten';
	public deleteFromOrganisation: string = 'Aus Organisation entfernen';
	public multipleOrganisationMessage: string = 'Sie sind Administrator für mehere Organisationen';
	public pleaseSelectMessage: string = 'Bitte wählen Sie eine aus:';
	public publicUser: string = 'Name des Anbieters veröffentlichen?';
	public dateTimeQuestion: string = 'Wann findet Ihre Veranstaltung statt?';
	public placeQuestion: string = 'Wo findet Ihre Veranstaltung statt?';
	public pleaseControl: string = 'Bitte kontrollieren Sie Ihre Angaben';
	public showOnlyFutureActivities: string = 'nur aktuelle Aktivitäten';
	public scheduleListExplanation: string = 'Sie können an dieser Stelle auch Anpssungen vornehmen, ' +
		'indem Sie auf den jeweiligen	termin klicken.';
	// public chooseOrganisationForActivity: string = 'Für welche Organisation soll die Veranstaltung angelegt werden';
	public tagsHint: string = 'Schlagworte bitte mit Komma trennen';
	public scheduleInfo: string =
		'Bei eintägigen Veranstaltungen bitte zwei mal ' +
		'das gleiche Datum angeben. Für regelmäßige Veranstaltungen bitte das Datum	des ersten und des ' +
		'letzten Termins angeben.Sie können die Termine anschließend noch einmal kontrollieren und verändern.';
	public followingWeekdays: string = 'an folgenden Wochentagen';
	public everyMonth: string = 'eines jeden Monats';
	public workdays: string = 'werktags';
	public every: string = 'Jede(n/s)';
	public suffixAmount: string = 'te(n/s)';
	public suffixNumber: string = 'ten';
	public timeOfDay: string = 'Uhrzeit';
	public dateTime: string = 'Datum';
	public minutes: string = 'Minuten';
	public hours: string = 'Stunden';
	public additional: string = 'Zusätzlichen';


	public website: string = 'Webseite';
	public description: string = 'Beschreibung';
	public nameString: string = 'Name';
	public fullname: string = 'Vor- und Nachname';
	public phone: string = 'Telefon';
	public mail: string = 'Email';
	public address: string = 'Adresse';
	public addressManagement: string = 'Adressverwaltung';
	public street: string = 'Straße';
	public postalCode: string = 'PLZ';
	public place: string = 'Ort';
	public houseNumber: string = 'Hausnummer';
	public quarter: string = 'Quartier';
	public longitude: string = 'Längengrad';
	public latitude: string = 'Breitengrad';
	public dates: string = 'Termine';
	public date: string = 'Termin';
	public noFutureDates: string = 'Keine zukünftigen Termine';
	public title: string = 'Titel';
	public noTitle: string = 'Kein Titel';
	public tags: string = 'Tags';
	public targetGroups: string = 'Zielgruppen';
	public targetGroup: string = 'Zielgruppe';
	public category: string = 'Kategorie';
	public categories: string = 'Kategorien';

	public organisations: string = 'Organisationen';
	public organisation: string = 'Organisation';
	public organisationAdmin: string = 'Organisation verwalten';
	public users: string = 'Anbieter';
	public user: string = 'Anbieter';
	public members: string = 'Mitglieder';
	public activities: string = 'Aktivitäten';
	public activity: string = 'Aktivität';
	public account: string = 'Konto';
	public admin: string = 'Admin';
	public admins: string = 'Admins';
	public userManagement: string = 'Nutzerverwaltung';

	public done: string = 'Erledigt';
	public summary: string = 'Zusammenfassung';
	public infos: string = 'Infos';
	public help: string = 'Hilfe';
	public warning: string = 'Achtung!';
	public outOfOrder: string = 'Funktioniert nicht. Wird derzeit entwickelt!';
	public color: string = 'Farbe';

	public configWarning: string = 'Durch Veränderungen in diesem Bereich verändern Sie die öffentliche Darstellung dieses Portals!';
	public mapcenterLongitude: string = 'Längengrad für Kartenmittelpunkt';
	public mapcenterLatitude: string = 'Breitengrad für Kartenmittelpunkt';
	public zoomfactor: string = 'Zoomfaktor für Karte';
	public mapProjection: string = 'Kartenprojektion';
	public portalName: string = 'Name dieses Portals';
	public portalSubtitle: string = 'Unterschrift dieses Portalnamens';

	// --------------------------
	// TABLE
	// --------------------------

	public defaultPageSize: number = 25;
	public pageSizeOptions: Array<number> = [5, 10, 25, 50, 100];

	// --------------------------
	// URLs
	// --------------------------

	public userURL: string = '(table:users)';
	public orgaAdminURL: string = '(table:organisation-admin)';
}
