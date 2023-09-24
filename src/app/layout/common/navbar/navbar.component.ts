import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
 
@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.scss'],
 })
export class NavBarComponent implements OnInit,OnDestroy{
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