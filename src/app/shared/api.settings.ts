import { HttpHeaders } from "@angular/common/http";

export class APISettings{
  public static API_ENDPOINT = 'http://localhost:3000/api';
  public static httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
}