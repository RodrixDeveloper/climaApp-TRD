import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad: string = '';
  temperatura: number = 0;
  humedad: number = 0;
  clima: string = '';
  query: boolean = false;
  loading: boolean = false;
  mostrarError: boolean = false;
  constructor(private _climaService: ClimaService) {}

  obtenerClima() {
    this.query = false;
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(
      (data) => {
        console.log(data);
        this.loading = false;
        this.query = true;
        this.temperatura = data.list[0].main.temp - 273;
        this.humedad = data.list[0].main.humidity;
        this.clima = data.list[0].weather[0].main;
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.error();
      }
    );
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }

  ngOnInit(): void {}
}
