import { Observable } from "rxjs";

export interface Crud {
  create(O: unknown): Observable<unknown>;
  read(O?: unknown): Observable<unknown>;
  update(O: unknown): Observable<unknown>;
  delete(O: unknown): Observable<unknown>;
}
