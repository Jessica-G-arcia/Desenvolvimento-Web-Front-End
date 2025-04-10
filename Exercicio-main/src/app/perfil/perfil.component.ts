import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  email: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { } //ActivatedRoute: This service provides access to the route's parameters, query parameters, and other route-related data.

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');
    console.log('Email recebido:', this.email);
    //snapshot.paramMap.get('email'): This retrieves the email parameter from the route. Ensure that your route is configured to include an email parameter (e.g., /perfil/:email).
  }

  sair(): void {
    localStorage.removeItem('email');
    // This removes the email from local storage, effectively logging the user out.
    this.router.navigate(['/login']);
    // This redirects the user to the login page after logging out.
  }
}