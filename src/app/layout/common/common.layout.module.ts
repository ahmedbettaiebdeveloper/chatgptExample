import { NgModule } from "@angular/core";
import { NavBarComponent } from "./navbar/navbar.component";
import { NotificationMenuComponent } from "./navbar/notification-menu/notification-menu.component";
import { ProfileMenuComponent } from "./navbar/profile-menu/profile-menu.component";

const commonComponents=[
    NavBarComponent,
    NotificationMenuComponent,
    ProfileMenuComponent
]
@NgModule({
    declarations:[
        ...commonComponents
    ],
    imports:[
        ...commonComponents
    ],
    exports:[
        ...commonComponents
    ]
})
export class CommonLayoutModule{
    
}