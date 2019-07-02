﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.0.3.0 (NJsonSchema v10.0.21.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class OtherClient {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : 'http://localhost:5000';
  }

  getSomeData(): Observable<MyOtherSampleModel[]> {
    let url_ = this.baseUrl + '/api/Other/GetSomeData';
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };

    return this.http
      .request('get', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processGetSomeData(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processGetSomeData(<any>response_);
            } catch (e) {
              return <Observable<MyOtherSampleModel[]>>(<any>_observableThrow(e));
            }
          } else return <Observable<MyOtherSampleModel[]>>(<any>_observableThrow(response_));
        })
      );
  }

  protected processGetSomeData(response: HttpResponseBase): Observable<MyOtherSampleModel[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (<any>response).error instanceof Blob
        ? (<any>response).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          let result200: any = null;
          let resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
          if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200) result200!.push(MyOtherSampleModel.fromJS(item));
          }
          return _observableOf(result200);
        })
      );
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return throwException('An unexpected server error occurred.', status, _responseText, _headers);
        })
      );
    }
    return _observableOf<MyOtherSampleModel[]>(<any>null);
  }

  doSomething(request: MyOtherSampleModel): Observable<void> {
    let url_ = this.baseUrl + '/api/Other/DoSomething';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(request);

    let options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .request('post', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processDoSomething(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processDoSomething(<any>response_);
            } catch (e) {
              return <Observable<void>>(<any>_observableThrow(e));
            }
          } else return <Observable<void>>(<any>_observableThrow(response_));
        })
      );
  }

  protected processDoSomething(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (<any>response).error instanceof Blob
        ? (<any>response).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return _observableOf<void>(<any>null);
        })
      );
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return throwException('An unexpected server error occurred.', status, _responseText, _headers);
        })
      );
    }
    return _observableOf<void>(<any>null);
  }

  doSomethingElse(): Observable<void> {
    let url_ = this.baseUrl + '/api/Other/DoSomethingElse';
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({})
    };

    return this.http
      .request('post', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processDoSomethingElse(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processDoSomethingElse(<any>response_);
            } catch (e) {
              return <Observable<void>>(<any>_observableThrow(e));
            }
          } else return <Observable<void>>(<any>_observableThrow(response_));
        })
      );
  }

  protected processDoSomethingElse(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (<any>response).error instanceof Blob
        ? (<any>response).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return _observableOf<void>(<any>null);
        })
      );
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return throwException('An unexpected server error occurred.', status, _responseText, _headers);
        })
      );
    }
    return _observableOf<void>(<any>null);
  }
}

@Injectable({
  providedIn: 'root'
})
export class SampleDataClient {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : 'http://localhost:5000';
  }

  getSomeData(): Observable<MySampleModel[]> {
    let url_ = this.baseUrl + '/api/SampleData/GetSomeData';
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };

    return this.http
      .request('get', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processGetSomeData(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processGetSomeData(<any>response_);
            } catch (e) {
              return <Observable<MySampleModel[]>>(<any>_observableThrow(e));
            }
          } else return <Observable<MySampleModel[]>>(<any>_observableThrow(response_));
        })
      );
  }

  protected processGetSomeData(response: HttpResponseBase): Observable<MySampleModel[]> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (<any>response).error instanceof Blob
        ? (<any>response).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          let result200: any = null;
          let resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
          if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200) result200!.push(MySampleModel.fromJS(item));
          }
          return _observableOf(result200);
        })
      );
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return throwException('An unexpected server error occurred.', status, _responseText, _headers);
        })
      );
    }
    return _observableOf<MySampleModel[]>(<any>null);
  }

  doSomething(request: MySampleModel): Observable<void> {
    let url_ = this.baseUrl + '/api/SampleData/DoSomething';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(request);

    let options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .request('post', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processDoSomething(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processDoSomething(<any>response_);
            } catch (e) {
              return <Observable<void>>(<any>_observableThrow(e));
            }
          } else return <Observable<void>>(<any>_observableThrow(response_));
        })
      );
  }

  protected processDoSomething(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (<any>response).error instanceof Blob
        ? (<any>response).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return _observableOf<void>(<any>null);
        })
      );
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return throwException('An unexpected server error occurred.', status, _responseText, _headers);
        })
      );
    }
    return _observableOf<void>(<any>null);
  }

  doSomethingElse(): Observable<void> {
    let url_ = this.baseUrl + '/api/SampleData/DoSomethingElse';
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({})
    };

    return this.http
      .request('post', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processDoSomethingElse(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processDoSomethingElse(<any>response_);
            } catch (e) {
              return <Observable<void>>(<any>_observableThrow(e));
            }
          } else return <Observable<void>>(<any>_observableThrow(response_));
        })
      );
  }

  protected processDoSomethingElse(response: HttpResponseBase): Observable<void> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (<any>response).error instanceof Blob
        ? (<any>response).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return _observableOf<void>(<any>null);
        })
      );
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap(_responseText => {
          return throwException('An unexpected server error occurred.', status, _responseText, _headers);
        })
      );
    }
    return _observableOf<void>(<any>null);
  }
}

export class MyOtherSampleModel implements IMyOtherSampleModel {
  someString?: string | undefined;
  someDateTime?: Date;
  someInt?: number;

  constructor(data?: IMyOtherSampleModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.someString = data['someString'];
      this.someDateTime = data['someDateTime'] ? new Date(data['someDateTime'].toString()) : <any>undefined;
      this.someInt = data['someInt'];
    }
  }

  static fromJS(data: any): MyOtherSampleModel {
    data = typeof data === 'object' ? data : {};
    let result = new MyOtherSampleModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['someString'] = this.someString;
    data['someDateTime'] = this.someDateTime ? this.someDateTime.toISOString() : <any>undefined;
    data['someInt'] = this.someInt;
    return data;
  }
}

export interface IMyOtherSampleModel {
  someString?: string | undefined;
  someDateTime?: Date;
  someInt?: number;
}

export class MySampleModel implements IMySampleModel {
  someString?: string | undefined;
  someDateTime?: Date;
  someDateTimeOffset?: Date;
  someInt?: number;
  someEnum?: MyEnum;
  someFlagsEnum?: MyFlagsEnum;

  constructor(data?: IMySampleModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.someString = data['someString'];
      this.someDateTime = data['someDateTime'] ? new Date(data['someDateTime'].toString()) : <any>undefined;
      this.someDateTimeOffset = data['someDateTimeOffset']
        ? new Date(data['someDateTimeOffset'].toString())
        : <any>undefined;
      this.someInt = data['someInt'];
      this.someEnum = data['someEnum'];
      this.someFlagsEnum = data['someFlagsEnum'];
    }
  }

  static fromJS(data: any): MySampleModel {
    data = typeof data === 'object' ? data : {};
    let result = new MySampleModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['someString'] = this.someString;
    data['someDateTime'] = this.someDateTime ? this.someDateTime.toISOString() : <any>undefined;
    data['someDateTimeOffset'] = this.someDateTimeOffset ? this.someDateTimeOffset.toISOString() : <any>undefined;
    data['someInt'] = this.someInt;
    data['someEnum'] = this.someEnum;
    data['someFlagsEnum'] = this.someFlagsEnum;
    return data;
  }
}

export interface IMySampleModel {
  someString?: string | undefined;
  someDateTime?: Date;
  someDateTimeOffset?: Date;
  someInt?: number;
  someEnum?: MyEnum;
  someFlagsEnum?: MyFlagsEnum;
}

export enum MyEnum {
  First = 1,
  Second = 2,
  Third = 3
}

export enum MyFlagsEnum {
  First = 1,
  Second = 2,
  Third = 4,
  Fourth = 8,
  Fifth = 16
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): Observable<any> {
  if (result !== null && result !== undefined) return _observableThrow(result);
  else return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next('');
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = event => {
        observer.next((<any>event.target).result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}
