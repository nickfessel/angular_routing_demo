import { Injectable } from '@angular/core';

@Injectable()
export class IconService {
    /** Returns a Material Design 'subject' icon */
    subjectIcon() {
        return "<span class='material-icons'>subject</span>";
    }
}