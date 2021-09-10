import { Controller, Post, Body, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  login(@Body() body) {
    return { token: this.authService.login(body.username, body.password)}
  }

  @Get("/teste")
  teste() {
    return {
      name: "Spakauskas"
    }
  }
}
