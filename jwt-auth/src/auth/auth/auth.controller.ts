import { Controller, Post, Body, Get, UseGuards, Req } from "@nestjs/common";
import { Role } from "../role.decorator";
import { RoleGuard } from "../role.guard";
import { JwtGuard } from "./jwt.guard";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  login(@Body() body) {
    return { token: this.authService.login(body.username, body.password) };
  }

  @Role("Admin")
  @UseGuards(JwtGuard, RoleGuard)
  @Get("/teste")
  test(@Req() req) {
    console.log(req.user);
    return {
      name: "Spakauskas"
    };
  }
}
