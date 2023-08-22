import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutasService } from '../service/rutas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor(private modalCtrl: ModalController, private fb: FormBuilder, public service_ruta: RutasService, private router: Router) { }

  formCreateRutas!: FormGroup;
  responseData: any;
  dataUser: any;


  ngOnInit() {
    this.dataUser = localStorage.getItem('infoUser');
    const _uid = JSON.parse(this.dataUser);
    this.createFrom(_uid);
    
  }

  createFrom(id: any) {
    this.formCreateRutas = this.fb.group({
      fecha: [''],
      tipo_vehiculo: [''],
      hora_salida: [''],
      cupos_disponibles: [''],
      origen: [''],
      destino: [''],
      usuario: [id.uid]
    })
  }

  createRutas() {
    console.log(this.formCreateRutas.value);

    this.service_ruta.postRuta(this.formCreateRutas.value).subscribe(
      data => {
        this.responseData = data;
        this.back();
      }
    )
    
  }

  back() {
    this.modalCtrl.dismiss()
  }

}
