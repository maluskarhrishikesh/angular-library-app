import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute } from '@angular/router';
import { LibraryServiceService } from '../service/library-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  filteredProducts: {};
  category: any;

  private categories = [
    { id: 1, value: "Sports" },
    { id: 2, value: "Action" },
    { id: 3, value: "Fiction" },
    { id: 4, value: "Cooking" },
    { id: 5, value: "Technology" },
    { id: 6, value: "Travel" },
    { id: 7, value: "Spiritual" },
    { id: 8, value: "Fashion" },
    { id: 9, value: "Other" }
  ];

  constructor(private route: ActivatedRoute, private libraryService: LibraryServiceService) { }

  ngOnInit() {
    this.populateProducts();
    this.populateProductsByCategory();
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

  private populateProductsByCategory() {
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      if (this.category == null) {
        this.populateProducts();
      } else {
        this.libraryService.populateBooksByCategory(this.category).subscribe(response => {
          this.filteredProducts = response;
          console.log("success=" + JSON.stringify(response));
        }, error => {
          console.log("error=" + JSON.stringify(error));
        }
        );
      }
    })
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.bookName.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

}