import {Routes} from "@angular/router";
/**
 * Created by wenjuntan on 2017-02-12.
 */
export class BaMenuService {
    public convertRouteToMenus(routes: Routes): any[]{
        let items = this._convertRoutesToItems(routes);
        return items;
    }

    private _convertRoutesToItems(routes: any[], parent?:any): any[]{
        let items:any = [];
        routes.forEach(route => {
            items.push(this._convertRouteToObject(route, parent));
        })

        return items;
    }

    private _convertRouteToObject(route: any, parent?:any): any{
        let item:any = {};

        item.route = route;
        if(route.data && route.data.menu){
            item = route.data.menu;
            delete item.route.data.menu;
        }else {
            item.skip = true;
        }

        if(Array.isArray(item.route.path)){
            item.route.paths = item.route.path;

        }else{
            item.route.paths = parent && parent.route.path &&
        }

    }

}