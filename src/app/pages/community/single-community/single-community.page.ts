import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community/community.service';
import { Community } from 'src/app/interfaces/community';

@Component({
  selector: 'app-single-community',
  templateUrl: './single-community.page.html',
  styleUrls: ['./single-community.page.scss'],
})
export class SingleCommunityPage implements OnInit {

  community: Community;

  constructor(
    private activatedRoute: ActivatedRoute,
    private communityService: CommunityService
  ) { }

  ngOnInit() {
    this.communityService.getCommunityById(this.activatedRoute.snapshot.paramMap.get('community-id')).subscribe(communityResponse => {
      console.log(communityResponse);
    });
  }

}
