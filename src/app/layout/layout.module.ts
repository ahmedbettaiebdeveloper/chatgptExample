import { NgModule } from "@angular/core";
  import { LayoutComponent } from "./layout.component";
import { DashboardModule } from "./layouts/dashboard-layout/dashboard.layout.module";
import { EditorLayoutModule } from "./layouts/editor-layout/editor-layout.module";
import { CommonLayoutModule } from "./common/common.layout.module";

const layoutModules=[
    EditorLayoutModule,
    DashboardModule,
    CommonLayoutModule
]
@NgModule({
    declarations:[
        LayoutComponent
    ],
    imports:[
        ...layoutModules
    ],
    exports:[
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule{
    
}