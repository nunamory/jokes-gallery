import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FetchData {

    constructor(private httpClient: HttpClient) { }

    list() {
        const url = `https://drive.google.com/file/d/1G5wZ_MtK2k8X_YkdZxguHdQscW4ko4KD/view`;
        return this.httpClient.get(url);
    }
}
