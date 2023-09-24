import { NgModule } from "@angular/core";
import { EditorComponent } from "./editor.component";
import { RouterModule } from "@angular/router";
import { landingEditorRoutes } from "./editor.routing";
   
@NgModule({
declarations:[
    EditorComponent
],
imports:[
    RouterModule.forChild(landingEditorRoutes),
]
})
export class EditorModule{

}