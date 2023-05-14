import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { ComponentService } from '../component.service';
import { ComponentItem } from '../ComponentItem';

@Component({
  selector: 'app-component-details',
  template: `
    <h2>Component Details</h2>
    <div *ngIf="componentItem">
      <label for="name">Name:</label>
      <input type="text" id="name" [(ngModel)]="componentItem.name">
      <p>Name: {{ componentItem.name }}</p>
      <p>Description: {{ componentItem.description }}</p>

      <h3>Upload Image</h3>
  <input type="file" (change)="onFileSelected($event)">
  <button (click)="uploadImage()">Upload</button>
  <img [src]="componentItem.imageUrl" *ngIf="componentItem.imageUrl" alt="Component Image">

  
  <button (click)="goBack()">Go Back</button>
    </div>
    <button (click)="saveChanges()">Save</button>
  `
})
/*
export class ComponentDetailsComponent implements OnInit {
  componentItem: ComponentItem | undefined;
  componentItems: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.componentItem = this.getComponentItem(id);
  }

  getComponentItem(id: number): ComponentItem | undefined {
    // Fetch component item data from API or use a service
    // Here, using a dummy implementation with static data
    return this.componentItems.find((item: { id: number; }) => item.id === id);
  }
  

  saveChanges(): void {
    // Implement save logic here
    console.log('Saved changes:', this.componentItem);
  }*/

  export class ComponentDetailsComponent implements OnInit {
    componentItem: ComponentItem | undefined;
    selectedFile: File | null = null;

    constructor(private route: ActivatedRoute, private router: Router, private componentService: ComponentService) {}
   
    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.componentItem = this.componentService.getComponentItem(id);
    }
  
    saveChanges(): void {
      if (this.componentItem) {
        this.componentService.updateComponentItem(this.componentItem);
        console.log('Changes saved:', this.componentItem);
        this.router.navigate(['/components']);
      }
    }
    goBack(): void {
      this.router.navigate(['/components']);
    }
    onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0];
      this.uploadImage();
    }
    uploadImage(): void {
      if (this.componentItem && this.selectedFile) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.componentItem!.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    }
    
  }
