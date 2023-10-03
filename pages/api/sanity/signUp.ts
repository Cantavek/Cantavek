import { client } from '@/feature/sanity/client';
import { signUpHandler } from 'next-auth-sanity';

export default signUpHandler(client);