import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
//it is co-related to the strategy from jwt-strategy
export class JwtGuard extends AuthGuard("jwt") {}
