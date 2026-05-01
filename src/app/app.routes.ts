import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalExample } from './components/signal-example/signal-example';
import { AttDirective } from './components/att-directive/att-directive';

export const routes: Routes = [
    {
        // path is nothing but url, by what url user will land on this route
        path: 'admin',
        component: Admin
    },
    {
        path: 'control-flow-statement',
        component: ControlFlow
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: SignalExample
    },
    {
        path: 'att-directive',
        component: AttDirective
    }
];
