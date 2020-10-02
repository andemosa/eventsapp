import { JQ_TOKEN } from './jQuery.service';
import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  el: any;
  @Input('modal-trigger') modalId;
  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
