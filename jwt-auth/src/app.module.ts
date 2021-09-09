import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { LoginController } from "./auth/login/login.controller";

@Module({
  imports: [AuthModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
