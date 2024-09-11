import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from '@/components/forms/user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your dashboard to start managing your property.'
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>

      {/* Left side with background image */}
      <div className="relative hidden h-full flex-col bg-muted p-8 text-white lg:flex dark:border-r">
        {/* Image background */}
        <Image
          src="/fran-xhxzhc0kFnY-unsplash.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-10 opacity-60"
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src="/No bg light.png" width={150} height={150} alt="logo" />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Effortlessly manage your real estate portfolio with our
              all-in-one platform. From tenant screening to rent collection,
              we&apos;ve got you covered.&rdquo;
            </p>
            <footer className="text-sm">
              Your Property Management Partner
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex h-full flex-col   space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
