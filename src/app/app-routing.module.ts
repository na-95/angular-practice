import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';


const routes: Routes = [{
  path: '',
  component: TodosComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'test',
  component: TestComponent
}
  , {
  path: 'two-way',
  component: TwoWayBindingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
