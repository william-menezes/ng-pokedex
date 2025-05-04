import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchEmitter: EventEmitter<string | null> = new EventEmitter();

  input = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  search() {
    this.searchEmitter.emit(this.input.value);
  }

  clearInput() {
    this.input.reset();
    this.searchEmitter.emit(this.input.value);
  }
}
