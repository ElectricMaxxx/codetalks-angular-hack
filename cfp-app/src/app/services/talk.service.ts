import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Talk } from '../models/talk';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class TalkService {

    constructor (private http: HttpClient) {}

    private generateIRI(resource: string, id: number): string {
        return environment.apiUrl + '/' + resource + '/' + id.toString();
    }

    getList(): Observable<Talk[]> {
        return this.http
          .get<Talk[]>(environment.apiUrl + `/talks`)
          .pipe(catchError((error: any) =>  Observable.throw(error)));
    }

    getTalk(id: number): Observable<Talk> {
        return this.http.get <Talk>(environment.apiUrl + '/talks/' + id);
    }

    addTalk(talk: Talk): Observable<{} | Talk> {
        return this.http
        .post<Talk>(environment.apiUrl + `/talks`, talk)
        .pipe(catchError((error: any) => {
            return Observable.throw(error);
        }));
    }

    removeTalk(talk: Talk): Observable<Talk> {
        return this.http.delete <Talk>(environment.apiUrl + '/talks/' + talk.id);
    }
}
