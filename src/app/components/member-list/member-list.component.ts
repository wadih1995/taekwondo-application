import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  isPopupVisible = false;
  selectedMember: any = null;

  constructor(private memberService: MemberService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe((data) => {
      this.members = data;
    });
  }

  deleteMember = (e: any) => {
    const id = e.row?.data?.id;
    if (id && confirm('Are you sure you want to delete this member?')) {
      this.memberService.deleteMember(id).subscribe(() => {
        this.members = this.members.filter((member) => member.id !== id);
      });
    }
  };

  openEditPopup = (e: any) => {
    this.selectedMember = { ...e.row.data }; // shallow copy to avoid auto-updating the grid
    this.isPopupVisible = true;
  };

  updateMember() {
    const url = `http://localhost:3000/api/members/${this.selectedMember.id}`;
    this.http.put(url, this.selectedMember).subscribe({
      next: () => {
        alert('Member updated successfully!');
        this.isPopupVisible = false;
        this.loadMembers();
      },
      error: () => {
        alert('Failed to update member.');
      },
    });
  }
}
