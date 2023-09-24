import { Component, ViewEncapsulation, OnInit, OnDestroy } from "@angular/core";

 
@Component({
    selector:'app-editor',
    templateUrl:'./editor.component.html',
    encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit,OnDestroy
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