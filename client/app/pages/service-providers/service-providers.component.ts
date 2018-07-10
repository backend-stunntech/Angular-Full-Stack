import { Component, OnInit } from '@angular/core';
import { Provider } from '../../service-provider.model';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {
  providers = [
    new Provider('Jason Abbott','Brooklyn'),
    new Provider('Dollie Green','Warsaw, Poland'),
    new Provider('Bryan Pratt','Stockholm, Sweden'),
    new Provider('Sally Castillo','Brooklyn'),
    new Provider('Bryan Pratt','Stockholm, Sweden'),
    new Provider('Victor Castro','Potland, OR')
    
  ];
  constructor() { }

  ngOnInit() {
    
    
  }

}
