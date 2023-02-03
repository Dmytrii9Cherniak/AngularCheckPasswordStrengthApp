import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Levels_of_password} from "../../enum/levels_of_password";
import {CheckPasswordService} from "../../services/checkpassword.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public inputPasswordValue: string;
  public levelOfPassword: number;
  public checkPasswordMessage: string = 'Please, type your password';
  public subscription: Subscription;

  constructor(public formBuilder: FormBuilder, public checkPasswordService: CheckPasswordService) {}

  ngOnInit(): void {
    this.levelOfPassword = Levels_of_password.NO_PASSWORD_VALUE
    this.form = this.formBuilder.group({
      password: ['']
    });
    this.checkPasswordStrength();
  }

  public checkPasswordStrength():void {
    this.subscription = this.form.controls['password'].valueChanges.subscribe(value => {
        this.inputPasswordValue = value;
        this.checkStatePassword();
      });
  }

  public checkStatePassword():void {
    if (this.checkPasswordService.non_latin_letters.test(this.inputPasswordValue)) {
      this.wrongDataEntered();
    } else if (!this.inputPasswordValue.length) {
      this.emptyPasswordValue();
    } else if (this.inputPasswordValue.length && this.inputPasswordValue.length < 8) {
      this.setPasswordStatusSmallLength();
    } else if (this.isLengthBiggerThanOrEqualEight() && this.checkPasswordService.only_symbols.test(this.inputPasswordValue)) {
      this.setPasswordWeak();
    } else if (this.isLengthBiggerThanOrEqualEight() && this.checkPasswordService.only_letters.test(this.inputPasswordValue)) {
      this.setPasswordWeak();
    } else if (this.isLengthBiggerThanOrEqualEight() && this.checkPasswordService.only_numbers.test(this.inputPasswordValue)) {
      this.setPasswordWeak();
    } else if (this.isLengthBiggerThanOrEqualEight() && this.checkPasswordService.symbols_and_letters.test(this.inputPasswordValue)) {
      this.setPasswordMedium();
    } else if (this.isLengthBiggerThanOrEqualEight() && this.checkPasswordService.numbers_and_symbols.test(this.inputPasswordValue)) {
      this.setPasswordMedium();
    } else if (this.isLengthBiggerThanOrEqualEight() && this.checkPasswordService.numbers_and_letters.test(this.inputPasswordValue)) {
      this.setPasswordMedium();
    } else if (this.isLengthBiggerThanOrEqualEight() && this.checkPasswordService.symbols_letters_numbers.test(this.inputPasswordValue)) {
      this.setPasswordStrong();
    }
  }

  public emptyPasswordValue():void {
      this.levelOfPassword = Levels_of_password.NO_PASSWORD_VALUE;
      this.checkPasswordMessage = 'Please, enter password';
  }

  public wrongDataEntered():void {
    this.levelOfPassword = Levels_of_password.WRONG_DATA_ENTERED;
    this.checkPasswordMessage = 'You entered some wrong letters';
  }

  public setPasswordStatusSmallLength():void {
    this.checkPasswordMessage = 'Please, type at least 8 characters';
    this.levelOfPassword = Levels_of_password.SMALL_PASSWORD_LENGTH;
  }

  public setPasswordWeak():void {
    this.levelOfPassword = Levels_of_password.WEAK;
    this.checkPasswordMessage = 'Password is weak';
  }

  public setPasswordMedium():void {
    this.levelOfPassword = Levels_of_password.MEDIUM;
    this.checkPasswordMessage = 'Password is medium';
  }

  public setPasswordStrong():void {
    this.levelOfPassword = Levels_of_password.STRONG;
    this.checkPasswordMessage = 'Password is strong';
  }

  public isLengthBiggerThanOrEqualEight(): boolean {
    return this.inputPasswordValue.length >= 8;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
