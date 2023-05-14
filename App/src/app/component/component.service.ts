import { Injectable } from '@angular/core';
import { ComponentItem } from './ComponentItem';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  componentItems: ComponentItem[] = [
    { id: 1, name: 'Component 1', description: 'grrtgrrt'},
    { id: 2, name: 'Component 2', description: 'grrtgrrt' },
    { id: 3, name: 'Component 3', description: 'grrtgrrt' }
  ];

  constructor() {}

  getComponentItems(): ComponentItem[] {
    return this.componentItems;
  }

  getComponentItem(id: number): ComponentItem | undefined {
    return this.componentItems.find(item => item.id === id);
  }
  
  updateComponentItem(updatedItem: ComponentItem): void {
    const index = this.componentItems.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.componentItems[index] = updatedItem;
    }
  }
  
  deleteComponentItem(id: number): void {
    const index = this.componentItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.componentItems.splice(index, 1);
    }
  }

  addComponent(component: ComponentItem): void {
    this.componentItems.push(component);
  }
  
}
