import { Component, OnInit } from '@angular/core';
import {AwesomeService} from '../awesome.service';
import {Awesome} from '../awesome';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.scss']
})
export class AwesomeListComponent implements OnInit {
awesomeList: Awesome[];
awesomeForm: FormGroup = new FormGroup({
  title: new FormControl('')
});
  constructor(private awesomeService: AwesomeService) { }
  ngOnInit() {
this.awesomeService.getList().subscribe(result => {
  this.awesomeList = result;
});
  }

}
