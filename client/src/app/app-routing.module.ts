import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { DynamicFormPageComponent } from './components/dynamic-form-page/dynamic-form-page.component';
import { NgContentParentComponent } from './components/ng-content-parent/ng-content-parent.component';
import { FluidTabsComponent } from './components/fluid-tabs/fluid-tabs.component';
import { NotionComponent } from './components/notion/notion.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import { BearingPlotComponent } from './components/bearing-plot/bearing-plot.component';


const routes: Routes = [{
    path: '',
    component: TodosComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'two-way',
    component: TwoWayBindingComponent
  },
  {
    path: 'dynamic-form',
    component: DynamicFormPageComponent
  },
  {
    path: 'ng-content',
    component: NgContentParentComponent
  },
  {
    path: 'fluid-tabs',
    component: FluidTabsComponent
  },
  {
    path: 'notion',
    component: NotionComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'debounce',
    component: DebounceComponent
  },
  {
    path: 'arkeus',
    component: BearingPlotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
