import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  constructor() { }

  public sideNaveToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  public toggle(){   
    return this.sideNaveToggleSubject.next(null);
  }
}
