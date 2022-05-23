export interface DepartmentsResponse {
    departments: Department[];
}
export interface JobsResponse {
    jobs: Job[] | JobWithContent[];
    meta: {
        total: number;
    };
}
export interface JobUniqueResponse {
    job: JobWithContent | JobWithQuestions;
}
export interface OfficesResponse {
    offices: Office[];
}
export interface Job {
    id: number;
    internal_job_id: number;
    title: string;
    updated_at: string;
    requisition_id: string;
    absolute_url: string;
    metadata: null;
    location: {
        name: string;
    };
    data_compliance: DataCompliance[];
}
interface DataCompliance {
    type: 'gdpr';
    requires_consent: boolean;
    retention_period: number | null;
}
export interface JobWithContent extends Job {
    content: string;
    departments: Department[];
    offices: Office[];
}
export interface JobWithQuestions extends JobWithContent {
    questions: Question[];
    compliance: ComplianceQuestions[];
    location_questions: Question[];
    demographic_questions: DemographicQuestions | null;
}
export interface Question {
    label: string;
    description: string | null;
    fields: Field[];
    required: boolean;
}
export interface Field {
    name: string;
    type: 'input_file' | 'input_text' | 'input_hidden' | 'textarea' | 'multi_value_single_select' | 'multi_value_multi_select';
    values?: FieldValue[];
}
interface FieldValue {
    value: number;
    label: string;
}
interface ComplianceQuestions {
    description: string;
    questions: Question[];
    type: string;
}
interface DemographicQuestions {
    header: string;
    description: string;
    questions: Question[];
}
export interface Department {
    id: number;
    name: string;
    parent_id: number;
    child_ids: number[];
    jobs: Job[];
}
export interface Office {
    id: number;
    name: string;
    departments: Department[];
    parent_id: number | null;
    child_ids: number[];
}
export {};
