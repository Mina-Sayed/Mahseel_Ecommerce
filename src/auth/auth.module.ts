import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module'; // Import UsersModule

@Module({
  providers: [AuthService],
  imports: [
    JwtModule.register({ secret: 'your-secret-key' }),
    forwardRef(() => UsersModule), // استخدام forwardRef هنا
  ],
  exports: [AuthService],
})
export class AuthModule {}
