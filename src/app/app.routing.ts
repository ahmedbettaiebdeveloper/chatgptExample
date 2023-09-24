import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const appRoutes:Route[]=[
 
    {
        path:'editor',
        pathMatch:'full',
        component:LayoutComponent,
        data:{
            layout:'editor'
        },
        children:[
            {path:'',loadChildren:()=>import('./../app/modules/editor/editor.module').then(m=>m.EditorModule)}
        ]
    }
]