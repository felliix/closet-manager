import { Component, OnInit } from '@angular/core';
import { ClosetService } from '../services/closet.service';
import { RoutesService } from '../services/routes.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-closet-manage',
  templateUrl: './closet-manage.component.html',
  styleUrls: ['./closet-manage.component.scss'],
})

export class ClosetManageComponent implements OnInit {
  closetList: any;
  closetService: ClosetService;
  routesService: RoutesService;
  editMode : boolean;
  searchText: String;

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  save(): void {
    this.toggleEditMode();
    this.closetService.setAllClothes(this.closetList);
  }

  back(): void {
    this.router.navigate(['/dashboard']);
  }

  removeCard(clothingID: any): void {
    console.log("removing clothing controller", clothingID);
    this.closetService.removeClothing(clothingID).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  constructor(private closetservice: ClosetService,
              private router: Router,
              private routesservice: RoutesService) {
    this.editMode = false;
    this.closetService = closetservice;
    this.routesService = routesservice;
    this.closetService.getAllClothes().subscribe(
      (data: any) => {
        this.closetList = data.data;
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.closetList);
  }

  navTo(): void {
    this.routesService.setPrevUrl(this.router.url);
  }

  ngOnInit() {
  }

}
