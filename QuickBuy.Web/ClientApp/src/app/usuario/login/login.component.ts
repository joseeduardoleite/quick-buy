import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public usuario;
  public returnUrl: string;
  public mensagem: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {
  }
  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl']
    this.usuario = new Usuario();
  }

  entrar() {
    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        data => {
          var usuarioRetorno: Usuario;
          usuarioRetorno = data;
          sessionStorage.setItem("usuario-autenticado", "1");
          sessionStorage.setItem("email-usuario", usuarioRetorno.email);

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          }
          else {
            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
        }
      );
  }

  public img = "data:image/png;base64,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";
  public titulo = "Framework utilizado";
}
