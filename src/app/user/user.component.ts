/**
 * Componente para exibir os usuários bem como a chamada das funções
 * para salvar, editar e excluir um usuário
 */

import { Component, OnInit } from '@angular/core';

/**
 * Importanto componentes para funcionamento correto da aplicação
 */
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from './../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from './../shared/services/app-loader/app-loader.service';
import { UserPopupComponent } from './user-popup.component';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

/**
 * Importando o HttpClient para usar as requisições Restful de usuário
 */
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // variáveis para armazenar os usuários
  users: any;
  user = {};

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.http.get('/user').subscribe(data => {
      this.users = data;
    });
  }

  /**
   * Funções para a chamada do PopUp para salva e editar um usuário
   */
  openPopUp(data: any = {}, isNew?) {
    let title = isNew ? 'Add new member' : 'Update member';
    let dialogRef: MatDialogRef<any> = this.dialog.open(UserPopupComponent, {
      width: '720px',
      disableClose: true,
      data: { title: title, payload: data }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        if(!res) {
          return;
        }
        //this.loader.open();
        if (isNew) {
          this.http.post('/user', res)
            .subscribe(res => {
              //this.users = res;
              //this.loader.close();
              location.reload();
              this.router.navigate(['/']);
              //this.snack.open('Member Added!', 'OK', { duration: 4000 })
            }, (err) => {
              console.log(err);
              }
            );
        } else {
          this.http.put('/user/'+data._id, res)
          .subscribe(res => {
            //this.users = res;
            //this.loader.close();
            location.reload();
            this.router.navigate(['/']);
            //this.snack.open('Member Added!', 'OK', { duration: 4000 })
          }, (err) => {
            console.log(err);
            }
          );
        }
      })
  }

  /**
   * Função para excluir um usuário
   */
  deleteItem(row) {
    this.confirmService.confirm({message: `Delete ${row.email}?`})
      .subscribe(res => {
        if (res) {
          //this.loader.open();
          this.http.delete('/user/'+row._id)
            .subscribe(res => {
              //this.loader.close();
              location.reload();
              this.router.navigate(['/']);
              //this.snack.open('Member deleted!', 'OK', { duration: 4000 })
            }, (err) => {
              console.log(err);
            }
          );
        }
      });
  }

}
