import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PayTransferComponent } from './pages/pay-transfer/pay-transfer.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { PayAccountComponent } from './pages/pay-account/pay-account.component'; 

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'paytransfer', component: PayTransferComponent },
  {path: 'transactions', component: TransactionsComponent },
  {path: 'payaccount', component: PayAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
