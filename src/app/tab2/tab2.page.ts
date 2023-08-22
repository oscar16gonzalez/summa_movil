import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RutasService } from '../service/rutas.service';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  dataRutas: any = '';
  projects: any;

  constructor(private router: Router, private rutas_service: RutasService,  private modalCtrl: ModalController) {}

  ngOnInit() {
    this.Rutas();

  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1000);
  }

  

  Rutas() {
    
    this.rutas_service.getRutas().subscribe(data => {
      this.dataRutas = data.rutas;


      console.log("ACA Info", data);
    })
  }



  salir(){
    localStorage.removeItem("infoUser");
    localStorage.removeItem("correo");
    this.router.navigate(['/']);
  }

  async ModalCreatedRuta() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage
    })

 

    await modal.present();
  }

}
