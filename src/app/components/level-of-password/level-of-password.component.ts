import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Levels_of_password } from '../../enum/levels_of_password';

@Component({
  selector: 'app-level-of-password',
  templateUrl: './level-of-password.component.html',
  styleUrls: ['./level-of-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelOfPasswordComponent implements OnChanges {

  @Input()
  public levelOfPassword: number;

  public noPasswordValue:boolean = false;
  public wrongDataEntered:boolean = false;
  public smallPasswordLength:boolean = false;
  public levelPasswordWeak:boolean = false;
  public levelPasswordMedium:boolean = false;
  public levelPasswordStrong:boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.noPasswordValue = (changes['levelOfPassword'].currentValue === Levels_of_password.NO_PASSWORD_VALUE);
    this.wrongDataEntered = (changes['levelOfPassword'].currentValue === Levels_of_password.WRONG_DATA_ENTERED);
    this.smallPasswordLength = (changes['levelOfPassword'].currentValue === Levels_of_password.SMALL_PASSWORD_LENGTH);
    this.levelPasswordWeak = (changes['levelOfPassword'].currentValue === Levels_of_password.WEAK);
    this.levelPasswordMedium = (changes['levelOfPassword'].currentValue === Levels_of_password.MEDIUM);
    this.levelPasswordStrong = (changes['levelOfPassword'].currentValue === Levels_of_password.STRONG);
  }

}
