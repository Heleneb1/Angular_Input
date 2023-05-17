import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  // On initialise notre propriété avec une valeur par défaut
  // On décore notre propriété avec @Input()
  @Input() skills?: Skill[];

  constructor() {}

  ngOnInit(): void {}
}
