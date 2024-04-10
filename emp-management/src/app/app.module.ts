import { MatInputModule } from '@angular/material/input';
import { MatError, MatFormFieldModule } from "@angular/material/form-field";
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatError,
        MatButtonModule
    ]
})
export class AppModule { }