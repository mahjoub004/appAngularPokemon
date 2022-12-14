import { Directive, ElementRef, HostListener, Input, } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 450 ;


  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.borderColor)

  } //ElementRef me permet de representer un reference vers mes card pokemon

@Input('pokemonBorderCard') borderColor: string; //créer un directive personalisé


@HostListener('mouseenter') onMouseEnter(){ //Décorateur qui déclare un événement DOM à écouter et
                                            //fournit une méthode de gestionnaire à exécuter lorsque cet événement se produit.
  this.setBorder(this.borderColor || this.defaultColor)
}
@HostListener('mouseleave') onMouseLeave(){
this.setBorder(this.initialColor);
}



  setHeight(height : number){
    this.el.nativeElement.style.height = height +"px";
  }

  setBorder(color : string){
    let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
  }
}
