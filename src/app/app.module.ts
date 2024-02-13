import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './pages/home/home.component';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { BottomMenuComponent } from './layout/bottom-menu/bottom-menu.component';
import { PayTransferComponent } from './pages/pay-transfer/pay-transfer.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { PayAccountComponent } from './pages/pay-account/pay-account.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home' }  },
  { path: 'paytransfer', component: PayTransferComponent, data: { state: 'paytransfer' } },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    BottomMenuComponent,
    PayTransferComponent,
    TransactionsComponent,
    PayAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
