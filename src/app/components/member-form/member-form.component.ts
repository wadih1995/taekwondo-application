import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../../models/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
})
export class MemberFormComponent {
  member: Member = {
    name: '',
    age: 0,
    belt: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http
      .post<Member>('http://localhost:3000/api/members', this.member)
      .subscribe({
        next: (res) => {
          alert('Member added successfully!');
          this.member = { name: '', age: 0, belt: '' };
        },
        error: () => {
          alert('Failed to add member.');
        },
      });
  }
}
