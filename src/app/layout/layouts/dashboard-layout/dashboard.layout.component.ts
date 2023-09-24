import { Component, ViewEncapsulation, OnInit, OnDestroy } from "@angular/core";

 
@Component({
    selector:'dashboard-layout',
    templateUrl:'./dashboard.layout.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DashboardLayoutComponent implements OnInit,OnDestroy
{
    
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