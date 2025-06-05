export interface HashService {
  compare(plain: string, hash: string): boolean;
  hash(plain: string): Promise<string>;
}