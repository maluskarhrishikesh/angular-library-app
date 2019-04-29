import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../service/library-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
  filteredProducts: {};
  products: any;
  isAdmin: String;

  constructor(private libraryService: LibraryServiceService,
    private toastr: ToastrService, private router: Router) {
    this.isAdmin = localStorage.getItem("isAdmin");
  }

  ngOnInit() {
    this.isAdmin = localStorage.getItem("isAdmin");
    this.populateProducts();
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.bookName.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  populateProducts() {
    this.libraryService.populateBooks().subscribe(response => {
      this.filteredProducts = response;
      this.products = this.filteredProducts;
      console.log("success=" + JSON.stringify(response));
    }, error => {
      console.log("error=" + JSON.stringify(error));
    }
    );
  }

  delete(id) {
    this.libraryService.deleteBook(id).subscribe(response => {
      console.log("success=" + JSON.stringify(response));
      this.toastr.success('Data deleted successfully', 'Success', { timeOut: 2000 });
      this.router.navigate(['/books/delete']);
    }, error => {
      console.log("error=" + JSON.stringify(error));
      this.toastr.error(error.error.message, 'Error', { timeOut: 2000 });
    }
    );
  }

}