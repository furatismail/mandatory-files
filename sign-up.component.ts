import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user!: FormGroup;
  isSubmitted: boolean = false;

  get name(): FormControl {
    return this.user.get('name') as FormControl;
  }

  get account(): FormGroup {
    return this.user.get('account') as FormGroup;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', [Validators.required]],
        confirm: ['', [Validators.required]],
      })
    })

    this.user.get('account')?.valueChanges.subscribe(res => {
      const { email, confirm } = res;
      if (email && confirm && email !== confirm) {
        this.account.setErrors({
          notEqual: true
        })
      }
    })

    // this.user = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   account: new FormGroup({
    //     email: new FormControl('', [Validators.required]),
    //     confirm: new FormControl('', [Validators.required])
    //   })
    // })
  }

  submit() {
    this.isSubmitted = true;

    this.name.disable();

    console.log(this.account);

    if (this.user.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid')
    }
  }

}
