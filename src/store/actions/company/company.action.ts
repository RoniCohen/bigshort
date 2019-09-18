import { Action } from '@ngrx/store';

export const LOAD_COMPANY = '[COMPANY] Load Company';
export const LOAD_COMPANY_FAIL = '[COMPANY] Load Company Fail';
export const LOAD_COMPANY_SUCCESS = '[COMPANY] Load Company Success';

export class LoadCompany implements Action {
  readonly type = LOAD_COMPANY;
  constructor(public payload: any) { }
}

export class LoadCompanyFail implements Action {
  readonly type = LOAD_COMPANY_FAIL;

  constructor(public payload: any) { }
}

export class LoadCompanySuccess implements Action {
  readonly type = LOAD_COMPANY_SUCCESS;

  constructor(public payload: any) { }
}

export type CompanyActions = LoadCompany | LoadCompanyFail | LoadCompanySuccess
