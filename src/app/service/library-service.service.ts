import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  URMS_HOSTNAME = "http://localhost:8084";

  constructor(private http: HttpClient) { }

  saveBook(bookDetails) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("token")
      })
    };
    return this.http.post(this.URMS_HOSTNAME + "/book", bookDetails, httpOptions);
  }

  updateBook(bookDetails) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("token")
      })
    };
    return this.http.patch(this.URMS_HOSTNAME + "/book", bookDetails, httpOptions);
  }

  populateBooks() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("token")
      })
    };
    return this.http.get(this.URMS_HOSTNAME + "/book", httpOptions);
  }

  populateBooksByCategory(categoryId) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("token")
      })
    };
    return this.http.get(this.URMS_HOSTNAME + "/book/category/" + Number(categoryId), httpOptions);
  }

  getBook(bookId) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("token")
      })
    };
    return this.http.get(this.URMS_HOSTNAME + "/book/" + Number(bookId), httpOptions);
  }

  deleteBook(bookId) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "bearer " + localStorage.getItem("token")
      })
    };
    return this.http.delete(this.URMS_HOSTNAME + "/book/" + Number(bookId), httpOptions);
  }
}
