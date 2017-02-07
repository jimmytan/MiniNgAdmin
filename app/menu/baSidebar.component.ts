/**
 * Created by wenjuntan on 2017-01-30.
 */
import {Component, OnInit} from "@angular/core";
import {MENU} from "./app.menu";
@Component({
    selector: 'ba-sidebar',
    styles: [require('./baSidebar.scss')],
    template: require('./baSidebar.html')
})
export class BaSidebar implements OnInit{

    public routes = MENU;
    public ngOnInit(): void {
    }

}