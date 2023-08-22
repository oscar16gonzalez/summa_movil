import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../service/users.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formUser!: FormGroup;




  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, public alertController: AlertController, private service: UsersService,) {

  }

  ngOnInit() {
    this.loginUser();
  }

  loginUser() {
    this.formUser = this.formBuilder.group({
      correo: [''],
      password: [''],
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error al iniciar sesión',
      // subHeader: 'Usuario o contraseña incorrectos',
      message: 'Usuario o contraseña incorrectos intente nuevamente',
      buttons: ['OK']
    });
    await alert.present();
  }

  login() {

    this.service.login(this.formUser.value).subscribe(
      res => this.setUserSession(res),
      err => console.log('Error * | Usuario o Contraseña incorrecta')
    )
    // this.service.login(data).subscribe((data: any) => {
    //   console.log(data);

    //   if (data.message === 'Success') {
    //     this.setUserSession();
    //   } else {
    //     this.presentAlert();
    //   }
    // });
  }

  setUserSession(res: any) {
    console.log(this.formUser.value);
    localStorage.setItem('infoUser', JSON.stringify(res))
    this.router.navigate(['/menu/tabs/tab2']);


  }

}
