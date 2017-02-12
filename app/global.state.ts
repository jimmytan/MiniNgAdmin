/**
 * Created by wenjuntan on 2017-02-11.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
@Injectable()
export class GlobalState{
    private _date = new Subject<Object>();
    private _dataStream = this._date.asObservable();
    private _subscriptions: Map<string, Array<Function>> = new Map<string, Array<Function>>();

    constructor(){
        this._dataStream.subscribe((data) => this._onEvent(data));
    }

    notifyDataChanged(event: any, value: any): void {
        let current = this._date[event];
        if (current != value) {
            this._date[event] = value;
            this._date.next({
                event: event,
                data: this._date[event]
            })
        }
    }


    private _onEvent(data: any): void {
        let subscripters = this._subscriptions.get(data['event']) || [];
        subscripters.forEach((callback) => {
            callback.call(null, data['data']);
        })
    }

}
