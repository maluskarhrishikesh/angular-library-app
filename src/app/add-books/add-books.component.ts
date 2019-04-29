import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../service/library-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  product = {};
  id;

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

  constructor(private libraryService: LibraryServiceService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null)
      this.populateByBookId(this.id);
  }

  private populateByBookId(id) {
    this.libraryService.getBook(id).subscribe(response => {
      this.product = response;
      console.log("success=" + JSON.stringify(response));
    }, error => {
      console.log("error=" + JSON.stringify(error));
    }
    );
  }

  save(product) {
    if (this.id == null) {
      this.saveBook(product);
    } else {
      this.updateBook(product);
    }
  }

  saveBook(product) {
    this.libraryService.saveBook(product).subscribe(response => {
      console.log("success=" + JSON.stringify(response));
      this.toastr.success('Data saved successfully', 'Success', { timeOut: 2000 });
    }, error => {
      console.log("error=" + JSON.stringify(error));
      this.toastr.error(error.error.message, 'Error', { timeOut: 2000 });
    }
    );
  }

  updateBook(product) {
    this.libraryService.updateBook(product).subscribe(response => {
      console.log("success=" + JSON.stringify(response));
      this.toastr.success('Data updated successfully', 'Success', { timeOut: 2000 });
    }, error => {
      console.log("error=" + JSON.stringify(error));
      this.toastr.error(error.error.message, 'Error', { timeOut: 2000 });
    }
    );
  }

}
