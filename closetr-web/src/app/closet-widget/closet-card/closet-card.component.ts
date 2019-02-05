import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ClosetService } from '../../services/closet.service';
import { Clothing } from '../../models/clothing.model';

@Component({
  selector: 'app-closet-card',
  templateUrl: './closet-card.component.html',
  styleUrls: ['./closet-card.component.scss']
})
export class ClosetCardComponent implements OnInit {

  @Input() clothing: Clothing;
  @Input() editMode: boolean;
  @Output() removeCardEmit: EventEmitter<Object> = new EventEmitter<Object>();

  isClosetManage: boolean;
  closetService: ClosetService;

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  removeCard(clothingID: any): void {
    this.removeCardEmit.emit(clothingID);
  }

  editCard(clothing: Clothing): void {
    this.closetService.setClothingForEdit(clothing);
    this.router.navigate(['/edit-clothing', clothing.clothingID]);
  }

  constructor(private router: Router, private closetservice: ClosetService) {
    this.isClosetManage = (router.url == '/closet-manage');
    this.closetService = closetservice;
  }

  ngOnInit() {
  }

}
