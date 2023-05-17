import { Component } from '@angular/core';
import { Developer } from '../models/developper.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  developer: Developer = {
    lastName: '',
    firstName: '',
    age: 0,
    gender: '',
    bio: '',
    skills: [],
  };

  constructor() {}
  skill1 = new Skill(
    'HTML',
    '../assets/html-logo.png',
    'https://www.w3.org/html/'
  );
  skill2 = new Skill(
    'CSS',
    '../assets/css-logo.png',
    'https://www.w3.org/Style/CSS/'
  );
  skill3 = new Skill(
    'JavaScript',
    'js-logo.png',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  );

  developer1: Developer = {
    lastName: 'Doe',
    firstName: 'John',
    age: 30,
    gender: 'Male',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit minima, asperiores molestiae, ex labore, doloribus architecto beatae ea sit quos? Eligendi asperiores neque quaerat ea, minus tempore vero assumenda',
    skills: [this.skill1, this.skill2],
  };

  developer2: Developer = {
    lastName: 'Smith',
    firstName: 'Jane',
    age: 28,
    gender: 'Female',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit minima, asperiores molestiae, ex labore, doloribus architecto beatae ea sit quos? Eligendi asperiores neque quaerat ea, minus tempore vero assumenda',
    skills: [this.skill1, this.skill3],
  };
  // developer = this.developer2;
}
