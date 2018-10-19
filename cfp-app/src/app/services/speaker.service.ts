import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Speaker } from '../models/speaker';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class SpeakerService {

    constructor (private http: HttpClient) {}

    private generateIRI(resource: string, id: number): string {
        return environment.apiUrl + '/' + resource + '/' + id.toString();
    }

    getList(): Observable<Speaker[]> {
        return this.http
          .get<Speaker[]>(environment.apiUrl + `/speakers`)
          .pipe(catchError((error: any) =>  Observable.throw(error)));
    }

    getSpeaker(id: number): Observable<Speaker> {
        return this.http.get <Speaker>(environment.apiUrl + '/speakers/' + id);
    }

    addSpeaker(speaker: Speaker): Observable<{} | Speaker> {
        return this.http
        .post<Speaker>(
            environment.apiUrl + `/speakers`, speaker
            )
        .pipe(catchError((error: any) => {
            return Observable.throw(error);
        }));
    }

    removeSpeaker(speaker: Speaker): Observable<Speaker> {
        return this.http.delete <Speaker>(environment.apiUrl + '/speakers/' + speaker.id);
    }
}
