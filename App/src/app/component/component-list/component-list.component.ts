import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../component.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentItem } from '../ComponentItem';

@Component({
  selector: 'app-component-list',
  template: `
  <h2>Component List</h2>
  <div class="table-card">
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      <tr *ngFor="let componentItem of componentItems">
        <td>{{ componentItem.id }}</td>
        <td>{{ componentItem.name }}</td>
        <td>{{ componentItem.description }}</td>
        <td>
          <button (click)="viewComponent(componentItem.id)">View</button>
          <button (click)="deleteComponent(componentItem.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>

  <form [formGroup]="componentForm" (ngSubmit)="addComponent()">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" formControlName="name" required>
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
</form>


  `
})
/*export class ComponentListComponent {
  componentItems: ComponentItem[] = [
    { id: 1, name: 'Component 1' },
    { id: 2, name: 'Component 2' },
    { id: 3, name: 'Component 3' }
  ];

  constructor(private router: Router) {}

  viewComponent(id: number): void {
    this.router.navigate(['/component-details', id]);
  }
}

  <div class="add-component-form">
  <h3>Add Component</h3>
  <form (submit)="addComponent()">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" [(ngModel)]="newComponent.name" required>
    </div>
    <div>
      <label for="description">Description:</label>
      <input type="text" id="description" name="description" [(ngModel)]="newComponent.description" required>
    </div>
    <button type="submit">Add</button>
  </form>
</div>


*/

export class ComponentListComponent implements OnInit {
  componentItems: ComponentItem[] = [];
  newComponent: ComponentItem = { id: 0, name: '', description: '' };
  componentForm: FormGroup;
  constructor(private router: Router, private componentService: ComponentService, private formBuilder: FormBuilder) {
    this.componentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.componentItems = this.componentService.getComponentItems();
  }

  viewComponent(id: number): void {
    this.router.navigate(['/component-details', id]);
  }

  deleteComponent(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this component?');
    if (confirmation) {
      this.componentService.deleteComponentItem(id);
      this.componentItems = this.componentService.getComponentItems();
    }
  }

  addComponent(): void {
    const name = this.componentForm.get('name')?.value;
  
    if (name && name.trim() !== '') {
      const newComponent: ComponentItem = {
        id: this.componentItems.length + 1,
        name: name,
        description: '',
      };
  
      this.componentItems.push(newComponent);
      this.clearForm();
    }
  }

  clearForm(): void {
    this.componentForm.reset();
  }
  
}