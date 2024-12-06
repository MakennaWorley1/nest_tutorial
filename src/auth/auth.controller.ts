import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller({
    path: "auth"
})
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(@Body() dto: any) {
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}