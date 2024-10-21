'use client';
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { profileSchema, type ProfileFormValues } from '@/lib/form-schema';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ProfileFormType {
  initialData: ProfileFormValues | null;
  categories: any;
}

export const CreateProfileOne: React.FC<ProfileFormType> = ({
  initialData,
  categories
}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit Profile' : 'Create Your Profile';
  const description = initialData
    ? 'Edit your profile details.'
    : 'To create your resume, we first need some basic information about you.';

  const action = initialData ? 'Save changes' : 'Create';

  // Define defaultValues using initialData if available
  const defaultValues: ProfileFormValues = initialData || {
    firstname: '',
    lastname: '',
    email: '',
    contactno: ''
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues, // Passing default values
    mode: 'onChange'
  });

  const {
    control,
    formState: { errors }
  } = form;

  const processForm: SubmitHandler<ProfileFormValues> = (data) => {
    console.log('data ==>', data);
    // API call or action to handle the form submission
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className="w-full space-y-8 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"
        >
          <div className="gap-8 md:grid md:grid-cols-2">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="John"
                      {...field}
                      className="dark:bg-gray-800 dark:text-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Doe"
                      {...field}
                      className="dark:bg-gray-800 dark:text-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="johndoe@gmail.com"
                      {...field}
                      className="dark:bg-gray-800 dark:text-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Contact Number */}
            <FormField
              control={form.control}
              name="contactno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your contact number"
                      disabled={loading}
                      {...field}
                      className="dark:bg-gray-800 dark:text-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="ml-auto bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            disabled={loading}
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
