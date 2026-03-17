import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: '',
      price: '',
      category: '',
    });
  }

  submitForm() {
    console.log(this.addForm.value);
  }
}
