import { Component, OnInit } from '@angular/core';
import { Provider } from '../../service-provider.model';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {
  providers1 = [
    new Provider('./assets/images/service-provider-1.png','Jason Abbott','Brooklyn'),
    new Provider('./assets/images/service-provider-2.png','Dollie Green','Warsaw, Poland'),
    new Provider('./assets/images/service-provider-3.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-4.png','Sally Castillo','Brooklyn'),
    new Provider('./assets/images/service-provider-5.png','Bryan Pratt','Stockholm, Sweden'),
    new Provider('./assets/images/service-provider-6.png','Victor Castro','Potland, OR')
    
  ];
  providers2 = [
    
    
    
  ];
  constructor() { }

  ngOnInit() {
    
    
  }

}
