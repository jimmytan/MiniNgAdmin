/**
 * Created by wenjuntan on 2017-02-06.
 */
import {Component, Input} from "@angular/core";
import {Routes, Router, NavigationEnd} from "@angular/router";
import {BaMenuService} from "./baMenuService";
import {GlobalState} from "../global.state";
import {Subscription} from "rxjs";
@Component({
    selector: "ba-menu",
    styles: [require('./baMenu.scss')],
    template: require('./baMenu.html')
})
export class BaMenu{
    @Input() menuRoutes: Routes = [];
    protected _onRouteChange: Subscription;
    public menuItems: any[];
    constructor(private _router: Router, private _service: BaMenuService, private _state: GlobalState){
        this._onRouteChange = this._router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event) => {
                    if(this.menuItems){

                    }
            })
    }

    public selectMenuAnyNotify(): void {
        if(this.menuItems) {
            this.menuItems = th
        }
    }


}