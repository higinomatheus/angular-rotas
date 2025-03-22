import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        // http://localhost:4200/portfolio/{params1}
        this.activatedRoute.params.subscribe((params) => console.log(params));

        // http://localhost:4200/portfolio/{param1}/{param2}
        this.activatedRoute.firstChild?.params.subscribe((params) => console.log(params));

        // URL com query params: http://localhost:4200/portfolio/{id}?param1=value1&param2=value2
        this.activatedRoute.queryParams.subscribe((queryParams) => console.log(queryParams));
    }

    ngOnInit(){
        setInterval(() => {
            this.router.navigate(['/']);
        }, 5000);
    }
}
