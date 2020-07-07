import { Component, OnInit } from '@angular/core';
import { MijnGegevensComponent } from '../../classes/mijn-gegevens/mijn-gegevens.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-mijn-gegevens-wijzigen',
  templateUrl: './form-mijn-gegevens-wijzigen.component.html',
  styleUrls: ['./form-mijn-gegevens-wijzigen.component.css']
})
export class FormMijnGegevensWijzigenComponent implements OnInit {
  // log(x) {console.log(x);}
  locaties = ['Ziekenhuis (inc. mort.)', 'Psychiatrische inrichting',
  'Penitentiare inrichting', 'GGD', 'Verpleeghuis'];

  model = new MijnGegevensComponent( 18, 'DrIQ@gmail.com', 'password',false ,this.locaties[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newForm() {
    new MijnGegevensComponent(42, '', '', false, '');
  }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit(): void {
  }

}
