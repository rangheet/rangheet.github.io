import { takeEvery, put, call } from "redux-saga/effects";
import { actionType, actions } from "./ducks";
import { api } from "../../api";
import { config } from "../../config";

export const personalInfoSagas = [
    takeEvery(actionType.READ_PERSONALINFO, getPersonalInfo)
];

function* getPersonalInfo()
{
    try
    {
        const personalInfo = yield call(() => api.get(`${config.BackendEndpoint}api/PersonalInfo`));
        yield put(actions.updatePersonalInfoAction(personalInfo));
    }
    catch(error)
    {
        console.error("Exception in personal-info saga", error);
    }

}