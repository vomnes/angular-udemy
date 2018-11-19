import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddeNames.bind(this)]), // Make 'this' available inside the function
        'email': new FormControl(
          null,
          [
            Validators.required,
            Validators.email,
          ],
          this.forbiddenEmails,
        ),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
    // Listen value changes
    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    // Listen status changes
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({ //patchValue
      'userData': {
        'username': 'Max',
        'email': 'max@test.com',
      },
      'gender': 'male',
      'hobbies': [],
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // Create a validator
  forbiddeNames(control: FormControl): {[s: string]: boolean} { // Key: value
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.co') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
