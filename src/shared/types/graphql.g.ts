
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface LoginInput {
    email: string;
    password: string;
}

export interface UserCreateInput {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface Auth {
    type: string;
    token: string;
}

export interface Error {
    message?: string;
}

export interface IMutation {
    userCreate(input?: UserCreateInput): UserCreateResponse | Promise<UserCreateResponse>;
}

export interface IQuery {
    login(input?: LoginInput): Auth | Promise<Auth>;
    whoami(): User | Promise<User>;
}

export interface User {
    userKey: string;
    firstName?: string;
    lastName?: string;
    email: string;
    createdAt: Date;
}

export interface UserCreateResponse {
    user?: User;
    error?: Error;
}
