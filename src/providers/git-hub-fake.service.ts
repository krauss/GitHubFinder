import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';


import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface'

// import { USER_LIST } from '../mocks/user.mocks';
// import { REPOSITORY_LIST } from '../mocks/repository.mocks'

/*
  Generated class for the GitHubFakeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubFakeServiceProvider {


  private baseUrl: string = "https://api.github.com/users";
  private repoUrl: string = "repos";

  constructor(private http: Http) {
    console.log('Hello GitHubFakeServiceProvider Provider');
  }


  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError);
  }

  getRepoInformation(username: string): Observable<Repository[]>{
    return this.http.get(`${this.baseUrl}/${username}/${this.repoUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError);
  }

  private handleError(error: Response | any){
    return Observable.throw(error.json().error || "Server error.");
  }

  private extractData(response: Response){
    return response.json();
  }

  private logData(response: Response){
    console.log(response);
  }

  // mockGetRepositoryInfo(username: string): Observable<Repository[]> {
  //   return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  // }
  //
  // /*
  //
  // */
  // mockGetUserInformation(username: string): Observable<User> {
  //   return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  // }

}
