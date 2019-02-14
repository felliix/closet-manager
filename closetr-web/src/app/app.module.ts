import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//components
import { TodayWidgetComponent } from './today-widget/today-widget.component';
import { BudgetWidgetComponent } from './budget-widget/budget-widget.component';
import { ClosetWidgetComponent } from './closet-widget/closet-widget.component';
import { ClosetCardComponent } from './closet-widget/closet-card/closet-card.component';
import { LogOutfitComponent } from './today-widget/log-outfit/log-outfit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClothingComponent } from './add-clothing/add-clothing.component';
import { ClosetManageComponent } from './closet-manage/closet-manage.component';
import { EditClothingComponent } from './edit-clothing/edit-clothing.component';
import { SpendingManageComponent } from './spending-manage/spending-manage.component';
import { BaseGeneralComponent } from './base-general/base-general.component';
import { BudgetManageComponent } from './budget-manage/budget-manage.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { RegisterComponent } from './register/register.component';

//pipes
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { DateRangeFilterPipe } from './pipes/date-range-filter.pipe';

//services
import { ClosetService } from './services/closet.service';
import { LogOutfitService } from './services/log-outfit.service';
import { RoutesService } from './services/routes.service';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { DateFormatService } from './services/utils/date-format.service';
import { UserMenuComponent } from './shared/user-menu/user-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { UiInputComponent } from './shared/ui-input/ui-input.component';
import { UiTextButtonComponent } from './shared/ui-text-button/ui-text-button.component';
import { UiInputSelectComponent } from './shared/ui-input-select/ui-input-select.component';
import { UiInputAddButtonComponent } from './shared/ui-input-add-button/ui-input-add-button.component';
import { UiInputAddTextComponent } from './shared/ui-input-add-text/ui-input-add-text.component';
import { UiSelectAddButtonComponent } from './shared/ui-select-add-button/ui-select-add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayWidgetComponent,
    BudgetWidgetComponent,
    ClosetWidgetComponent,
    ClosetCardComponent,
    LogOutfitComponent,
    DashboardComponent,
    AddClothingComponent,
    ClosetManageComponent,
    EditClothingComponent,
    SearchFilterPipe,
    SpendingManageComponent,
    BaseGeneralComponent,
    BudgetManageComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    DateRangeFilterPipe,
    UserMenuComponent,
    ProfileComponent,
    UiInputComponent,
    UiTextButtonComponent,
    UiInputSelectComponent,
    UiInputAddButtonComponent,
    UiInputAddTextComponent,
    UiSelectAddButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClosetService,
    LogOutfitService,
    RoutesService,
    UserService,
    AuthenticationService,
    DateFormatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
