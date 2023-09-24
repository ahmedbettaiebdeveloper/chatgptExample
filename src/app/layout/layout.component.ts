import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { Layout } from "./layout.types";

@Component({
    selector:'component',
    templateUrl:'./layout.component.html',
    styleUrls:['./layout.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class LayoutComponent implements OnInit,OnDestroy{
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    layout:Layout | undefined;
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