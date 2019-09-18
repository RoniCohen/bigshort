import * as CompanyActions from '../../actions/company/company.action';

export interface LoadCompanyState {
  data: any;
  loaded: boolean;
  loading: boolean;
}

export const initialState: LoadCompanyState = {
  data: null,
  loaded: false,
  loading: false,
};

export function CompanyReducer(state: LoadCompanyState = initialState,
  action: CompanyActions.CompanyActions) {
  switch (action.type) {
    case CompanyActions.LOAD_COMPANY:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case CompanyActions.LOAD_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case CompanyActions.LOAD_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };
  }
  return state;
}
