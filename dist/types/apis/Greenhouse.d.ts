/**
 * Endpoint response for: https://boards-api.greenhouse.io/v1/boards/{board_token}/departments
 */
export interface DepartmentsResponse {
    departments: Department[];
}
/**
 * Endpoint response for: https://boards-api.greenhouse.io/v1/boards/{board_token}/jobs
 */
export interface JobsResponse {
    jobs: Job[] | JobWithContent[];
    meta: {
        total: number;
    };
}
/**
 * Endpoint response for: https://boards-api.greenhouse.io/v1/boards/{board_token}/jobs/{job_id}
 */
export interface JobUniqueResponse {
    job: JobWithContent | JobWithQuestions;
}
/**
 * Endpoint response for: https://boards-api.greenhouse.io/v1/boards/{board_token}/offices
 */
export interface OfficesResponse {
    offices: Office[];
}
/**
 * Job application details.
 * This is the result of the /{board_token}/jobs endpoint.
 * This could be extended by calling the endpoint with ?content=true resulting on JobWithContent being returned.
 */
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
/**
 * For organizations with GDPR rules configured and operating with a legal basis of
 * explicit consent, the response may contain data_compliance objects.
 * These objects will include whether a response is required and the data retention
 * period in days as configured by the appropriate rule.
 */
interface DataCompliance {
    type: 'gdpr';
    requires_consent: boolean;
    retention_period: number | null;
}
/**
 * Job with details.
 * This is the result of calling any endpoint with ?content=true or /jobs/{job_id}
 */
export interface JobWithContent extends Job {
    content: string;
    departments: Department[];
    offices: Office[];
}
/**
 * Job with application questions.
 * This is the result of calling the /jobs/{job_id} endpoint with ?questions=true
 */
export interface JobWithQuestions extends JobWithContent {
    questions: Question[];
    compliance: ComplianceQuestions[];
    location_questions: Question[];
    demographic_questions: DemographicQuestions | null;
}
/**
 * Please note that it is possible for multiple fields to be aggregated beneath a single question.
 * The “Resume” field is a prime example, with both an input_file and textarea type accepted.
 * If marked as required, then we expect at least one of these fields to contain a valid
 * value when your form is submitted to the application submission endpoint.
 */
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
/**
 * For organizations using Greenhouse Inclusion, the response may contain demographic questions.
 * Each question contains an array of answer options that may be rendered based on
 * the question ‘type’ defined in the table above. The candidate must select an
 * answer option for questions with required set to true. If an answer option
 * is selected that has free_form set to true, the candidate must be
 * allowed to type a free-form response. This free-form response
 * is only required if no other answer options have been
 * selected by the candidate.
 */
interface DemographicQuestions {
    header: string;
    description: string;
    questions: Question[];
}
/**
 * Organization department. Could include a parent department and a list of sub-departments.
 */
export interface Department {
    id: number;
    name: string;
    parent_id: number;
    child_ids: number[];
    jobs: Job[];
}
/**
 * List of all the organization’s departments and jobs. Could include a
 * parent office and a list of sub-offices
 */
export interface Office {
    id: number;
    name: string;
    departments: Department[];
    parent_id: number | null;
    child_ids: number[];
}
export {};
