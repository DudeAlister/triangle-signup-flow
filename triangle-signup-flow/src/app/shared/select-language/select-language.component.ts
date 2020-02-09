import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LanguageModel } from '../models/language-pref.model';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {
  selected = 'en';

  constructor(private userService: UserService) {

  }

  ngOnInit() {

  }
  selectionChange() {
    const languageModel = new LanguageModel();
    languageModel.selectedLanguage = this.selected;
    this.userService.languagePrefSubject.next(languageModel);
  }
}
