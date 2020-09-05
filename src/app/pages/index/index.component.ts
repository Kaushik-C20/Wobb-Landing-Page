import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})

/**
 * Index-1 component
 */
export class IndexComponent implements OnInit {

  currentSection = 'home';
  aboutActive = false;

  constructor(private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
  }

  aboutClicked(){
    this.aboutActive = true;
    this.currentSection = '';
    this.router.navigateByUrl('/about');
  }

  navToInf(){
    this.router.navigateByUrl('/influencer');
  }

  selected() {
    this.aboutActive = false;
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.aboutActive = false;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
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
