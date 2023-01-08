import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  subject = new BehaviorSubject<boolean>(false);
  public loading$ = this.subject.asObservable();

  constructor() {}

  showLoading() {
    this.subject.next(true);
  }

  hideLoading() {
    this.subject.next(false);
  }
}
