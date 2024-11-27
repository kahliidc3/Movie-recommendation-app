import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  resetForm: FormGroup;
  isLoading = false;
  emailSent = false;

  constructor(private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.resetForm.valid) {
      this.isLoading = true;
      // In a real app, this would call a password reset service
      console.log('Password reset requested for:', this.resetForm.value.email);
      setTimeout(() => {
        this.isLoading = false;
        this.emailSent = true;
      }, 1500);
    } else {
      this.resetForm.get('email')?.markAsTouched();
    }
  }

  getErrorMessage(): string {
    const control = this.resetForm.get('email');
    if (control?.errors) {
      if (control.errors['required']) {
        return 'Email is required';
      }
      if (control.errors['email']) {
        return 'Please enter a valid email address';
      }
    }
    return '';
  }
}
