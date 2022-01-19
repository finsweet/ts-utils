import { simulateEvent } from './simulateEvent';
import type { FormField } from '../types';
export declare const clearFormField: (field: FormField, omitEvents?: Parameters<typeof simulateEvent>['1']) => void;
