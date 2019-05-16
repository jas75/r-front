import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  groupName: string = 'Home group';
  username: string = 'username';
  title: string = 'title de fou pour faire super long !!!!!!';
  content: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, at eos? Saepe delectus, iste explicabo repellat eaque deleniti dignissimos esse rem sequi dolore commodi quod recusandae nihil doloremque. At, molestias!';


  user: User;

  activeMenu = 0;

  slides: any;

  isLoggedIn: boolean;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.authenticationState.subscribe(state => {
      this.isLoggedIn = state;
      console.log('BehaviorSubject: ' + state);
    },
    err => console.log(err)
    );
    console.log('valeur de this.isLoggedIn quand j ouvre la tabs profile: ' + this.isLoggedIn);
    if (this.isLoggedIn) {
      setTimeout(() => {
        console.log('valeur de this.isLoggedIn quand je suis logge' + this.isLoggedIn);
        this.getUserProfile();
        // have to wait the subscriber result to execute this code, there must have another solution
        this.slides = this.returnSlides();
        this.slides.options = {
          effect: 'flip',
          initialSlide: 0
        };
      }, 500);
    }
  }

  getUserProfile() {
    this.authService.getUserId().then(id => {
      this.userService.getProfile(id).subscribe(res => {
        this.user = res.user;
      });
    });
  }

  navBarClick(menu: number) {
    this.slides.slideTo(menu).then(result => {
        this.activeMenu = menu;
      });
  }

  onSlideChange(event) {
    this.slides.getActiveIndex().then(index => {
      this.activeMenu = index;
    });
  }

  onScroll(event) {
    const navbar: any = document.getElementsByClassName('navbar-menu')[0];
    const slides: any = document.getElementById('slides-profile');
    if (event.detail.scrollTop  > 150) {
      navbar.style.position = 'fixed';
      navbar.style.top = '45px';
      slides.style.paddingTop = '60px';
    } else {
      slides.style.paddingTop = 'unset';
      navbar.style.position = 'unset';
    }
  }

  private returnSlides() {
    const slides: any = document.querySelector('#slides-profile');
    return slides;
  }

}
