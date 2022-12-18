import { Observable } from "rxjs";

export interface Crud {
  create(Q: unknown): Observable<unknown>;
  read(Q?: unknown): Observable<unknown>;
  update(Q: unknown): Observable<unknown>;
  delete(Q: unknown): Observable<unknown>;
}
