import { Component, ViewEncapsulation, OnInit, OnDestroy } from "@angular/core";

 
@Component({
    selector:'editor-layout',
    templateUrl:'./editor.layout.component.html',
    encapsulation: ViewEncapsulation.None
})
export class EditorLayoutComponent implements OnInit,OnDestroy
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