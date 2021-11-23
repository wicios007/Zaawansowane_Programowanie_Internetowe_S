import { Component, OnInit } from '@angular/core';
import { Image } from './Image'

@Component({
  selector: 'app-zad09',
  templateUrl: './zad09.component.html',
  styleUrls: ['./zad09.component.css']
})
export class Zad09Component implements OnInit {

  images: Image[];
  selectedIndex: number;

  constructor() { 
    this.images = []
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
    this.images.push(new Image("PCz logo poziom", "https://pcz.pl/fcp/aGBUKOQtTKlQhbx08SlkTUQdKUWRuHQwFDBoIVURNFDgPW1ZpCFghUHcKVigEQR1BXQEsKTwdAQsKJBVYCRlYdxdFDy5IGzpEMEIrMQxBC0EGRUtwf08Q/_users/code_YCFYXIghYYUQ6UhciCQgDI0QRCWY8AQ/kamila/logo/logo_paczka/logo_pl/pcz_logo_pol_poziom_kolor.png"))
    this.images.push(new Image("PCz logo pion", "https://pcz.pl/fcp/aGBUKOQtTKlQhbx08SlkTUQdKUWRuHQwFDBoIVURNFDgPW1ZpCFghUHcKVigEQR1BXQEsKTwdAQsKJBVYCRlYdxdFDy5IGzpEMEIrMQxBC0EGRUtwf08Q/_users/code_YCFYXIghYYUQ6UhciCQgDI0QRCWY8AQ/kamila/logo/logo_paczka/logo_pl/pcz_logo_piol_pion_kolor.png"))
    this.images.push(new Image("PCz WIMiI logo", "https://wimii.pcz.pl/thumb/cGBUKKhBRbQ13Vh00DRBtTEECHyctCTFNNjASVBQEJmIGUwM_BRcoRTpDBz0aUXETVwhdOCAxQg4GIgATSlUcJA9SWHFGVSBQOm8DMQUKWE1EHBRqYE8dEAYvBFISKBMpQQ1YeVAJbRt3XBU2D0ELQUQeUWRuDgIMHTcOXQoSCG9ZFRQuE0osViFVEzcaGhNPFgISLykyBAZLf0MFRFtYPgpNH2leGywaIkhHb1gbA1EEUA4/logo_wimii.png"))
    this.images.push(new Image("Angular logo", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"))
  }
  selectNextImageOnClick(){
    this.selectedIndex++;
  }
  selectPrevImageOnClick(){
    this.selectedIndex--;
  }
}
