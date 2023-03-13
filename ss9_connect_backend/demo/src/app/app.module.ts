import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentDetailComponent} from './component/student/student-detail/student-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentCreateComponent } from './component/student/student-create/student-create.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentListComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(({
      positionClass: 'toast-bottom-right',
    })),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
