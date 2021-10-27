import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) {
  }

  download(fileName : String): Observable<Blob> {
    return this.http.get("http://localhost:8080/api/alerts/voucher/export/excel", {
      responseType: 'blob'
    });
  }

}