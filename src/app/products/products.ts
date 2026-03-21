import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  views: number;
}

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})


export class Products {

  
  products: Product[] = [];
  deletingId: number | null = null;
  loading = false;
  error = '';

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts () {
    this.loading = true;
    this.error = '';

    this.http.get('http://localhost:3000/products').subscribe({
      next: (data: Product[]) => {
        this.loading = false;
        this.products = data;
      },
      error: () => {
        this.loading = false;
        this.error = "Lỗi khi call API"
      },
    });
  }

  deleteProduct(id: number) {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")
    if(!confirmDelete) return;

    this.deletingId = id;
    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter((product) => product.id !== id)
        this.deletingId = null;
        alert("Xóa thành công!");
      },
      error: () => {
        this.deletingId = null;
        this.error = "Lỗi khi xóa!";
      },
    });
  }
}
