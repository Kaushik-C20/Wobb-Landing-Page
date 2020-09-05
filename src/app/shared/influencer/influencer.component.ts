import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit {

  constructor(private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  selected() {
    this.router.navigateByUrl('/');
  }

  /**
   * Login modal
   */
  loginModal(content) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Register modal
   * @param registercontent content
   */
  registerModal(registercontent) {
    this.modalService.open(registercontent, { centered: true });
  }

}
