import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/localstorage.services';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  exibirBanner: boolean = false;

  constructor(private route: Router, private storageService: StorageService) { }

  ngOnInit() {
    const bannerState = this.storageService.getLocal('exibirBanner');
    this.exibirBanner = bannerState !== null ? bannerState : true;
  }

  onCheckboxChange() {
    this.storageService.setLocal('exibirBanner', this.exibirBanner);
  }
}

