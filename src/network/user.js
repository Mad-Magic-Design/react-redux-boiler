import { axiosClient } from "./axiosClient";
import { databaseName } from "./axiosClient";

export function signupUser (userInfo){
    return axiosClient.post(`/user/signup`, 
    {userInfo,
    databaseName,
    })}

export function signinUser (userInfo){
    return axiosClient.post(`/user/signin`, 
    {userInfo,
    databaseName,
    })}

export function updateUser (uid, field, info){
    return axiosClient.post(`/user/update/${uid}`, {
    field, info, databaseName
    })}

export function pushUser (uid, field, info){
    return axiosClient.post(`/user/push/${uid}`, {
    field, info, databaseName
    })}

export function getUserDoc (uid){
    return axiosClient.get(`/user/get/${uid}`)
    }