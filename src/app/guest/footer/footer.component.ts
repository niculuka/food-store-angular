import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { footTitle, FootTitle } from 'src/app/shared/data/footer.data';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  titles: Array<FootTitle> = footTitle;

  constructor(
    private toastrService: ToastrService,
  ) { }

  noRoute() {
    this.toastrService.warning("C O N S T R U C T I O N", "U N D E R");
  }

}