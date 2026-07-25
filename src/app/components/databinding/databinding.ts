import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  userName = 'Virat Kohli';
  img_url = 'https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png';

  flag = true;

  toggleFlag() {
    this.flag = !this.flag;
  }
}
