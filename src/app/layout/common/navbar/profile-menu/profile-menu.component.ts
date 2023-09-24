import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
 
@Component({
    selector:'app-profile-menu',
    templateUrl:'./profile-menu.component.html',
    styleUrls:['./profile-menu.component.scss'],
 })
export class ProfileMenuComponent implements OnInit,OnDestroy{
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