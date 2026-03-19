import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
})
export class AddProduct {
  addForm: FormGroup;
  loading = false;
  success = '';
  error = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      category: [''],
    });
  }
  
  get f() {
    return this.addForm.controls;
  }

  submitForm() {
    this.success ='';
    this.error = '';

    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    const data = this.addForm.value;
    this.http.post('http://localhost:3000/products', data).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Thêm thành công!";
        this.addForm.reset();
      },
      error: () => {
        this.loading = false;
        this.error = "Lỗi khi thêm!";
      }
    })
  }
}