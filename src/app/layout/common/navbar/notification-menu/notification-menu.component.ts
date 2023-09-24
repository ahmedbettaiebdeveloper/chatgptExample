import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
 
@Component({
    selector:'app-notification-menu',
    templateUrl:'./notification-menu.component.html',
    styleUrls:['./notification-menu.component.scss'],
 })
export class NotificationMenuComponent implements OnInit,OnDestroy{
    private _unsubscribeAll: Subject<any> = new Subject<any>();
     /**
     * Constructor
     */
    constructor(){}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------


    /**
     * On Init
     */
    ngOnInit(): void {
    }
    /**
     * On Destroy
     */
    ngOnDestroy(): void {
    }
    
}