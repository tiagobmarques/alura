import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";

@Injectable( { providedIn: 'root'})
export class PlatformDeterctorService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    isPlatformBrowser () {
        console.log(this.platformId);
        return isPlatformBrowser(this.platformId);
    }
}