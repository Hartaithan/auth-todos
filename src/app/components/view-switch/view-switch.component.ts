import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VIEW } from 'src/app/models/view.model';

@Component({
  selector: 'app-view-switch',
  templateUrl: './view-switch.component.html',
  styleUrls: ['./view-switch.component.scss'],
})
export class ViewSwitchComponent implements OnInit {
  readonly viewEnum = VIEW;

  value: VIEW = VIEW.List;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const viewParam: VIEW | undefined = params['view'];
      if (viewParam) {
        this.value = viewParam;
      }
    });
  }

  toggleView() {
    let newParams = {};

    if (this.value === VIEW.List) {
      newParams = { view: VIEW.Cards };
    } else {
      newParams = { view: VIEW.List };
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: newParams,
    });
  }
}
