/**
 * PopUp com o formulário para adição e edição do usuário
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html'
})
export class UserPopupComponent implements OnInit {
  public itemForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserPopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }

  /**
   * Validações dos campos requiridos
   */
  buildItemForm(item) {
    this.itemForm = this.fb.group({
      email: [item.email || '', Validators.required],
      first_name: [item.first_name || '', Validators.required],
      last_name: [item.last_name || '', Validators.required],
      vat: [item.vat || '', Validators.required],
      company: [item.company || '', Validators.required],
      address: [item.address || '', Validators.required],
      country: [item.country || '', Validators.required],
      postal_code: [item.postal_code || '', Validators.required],
      city: [item.city || '', Validators.required],
      state: [item.state || '', Validators.required]
    })
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }
}
