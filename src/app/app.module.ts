import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { InputComponent } from "./components/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";
import { LevelOfPasswordComponent } from "./components/level-of-password/level-of-password.component";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    LevelOfPasswordComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
