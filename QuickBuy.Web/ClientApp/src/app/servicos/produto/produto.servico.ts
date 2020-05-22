import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../model/produto";

@Injectable({
  providedIn: "root"
})
export class ProdutoServico implements OnInit {
  private _baseUrl: string;
  public produtos: Produto[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json')
  }

  ngOnInit(): void {
    this.produtos = [];
  }

  public cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseUrl + "api/produto", JSON.stringify(produto), { headers: this.headers });
  }

  public salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseUrl + "api/produto/salvar", JSON.stringify(produto), { headers: this.headers });
  }

  public deletar(produto: Produto): Observable<Produto[]> {
    return this.http.post<Produto[]>(this._baseUrl + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers });
  }

  public obterTodosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this._baseUrl + "api/produto");
  }

  public obterProduto(produtoId: number): Observable<Produto> {
    return this.http.get<Produto>(this._baseUrl + "api/produto");
  }

  public enviarArquivo(arquivoSelecionado: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
    return this.http.post<string>(this._baseUrl + "api/produto/enviarArquivo", arquivoSelecionado);
  }
}
