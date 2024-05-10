import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;


  ngOnInit(): void {
    console.log('PriceComponent (componente hijo): OnInit')
     this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`));

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent (componente hijo): Onchanges')
    console.log({ changes })
  }

  ngOnDestroy(): void {
    console.log('PriceComponent (componente hijo): OnDestroy')
    this.interval$?.unsubscribe();
  }

}
