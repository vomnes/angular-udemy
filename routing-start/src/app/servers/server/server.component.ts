import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(parseInt(id));
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(parseInt(params['id']));
        }
      )
  }

  onEdit() {
    this.router.navigate(
      ['edit'],
      {
        relativeTo: this.route,
        queryParamsHandling: 'preserve'
      },
    );
  }

}