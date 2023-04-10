import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckPasswordService {

  public symbols_letters_numbers = /^(?=.*?[A-Za-z])(?=.*?\d)(?=.*?[!@#$%^&*()`"'|,~.{}?><+=:;]).{3,}$/

  public symbols_and_letters = /^(?=.*?[!@#$%^&*()`"',.{}?><+=:;])(?=.*?[a-z])[!@#$%^&*()`"',.{}?><+=:;a-z]+$/i
  public numbers_and_symbols = /^(?=.*?[!@#$%^&*()`"',.{}?><+=:;])(?=.*?\d)[!@#$%^&*()`"',.{}?><+=:;\d]+$/
  public numbers_and_letters = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/i

  public only_numbers = /^\d+$/
  public only_symbols = /^[!@#$%^&*~()`"|',.{}?><+=:;]+$/
  public only_letters = /^[a-zA-Z]+$/

  public non_latin_letters = /[^\u0000-\u007f]/

}
