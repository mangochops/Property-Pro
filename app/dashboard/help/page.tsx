'use client';
import { useState } from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Help', link: '/dashboard/help' }
];

export default function HelpPage() {
  const [messages, setMessages] = useState<
    { type: 'user' | 'system'; text: string }[]
  >([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', text: inputValue }]);

      // Simulate a reply from the system
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: 'system',
            text: `You asked: "${inputValue}". How can I assist further?`
          }
        ]);
      }, 1000);

      setInputValue('');
    }
  };

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-gray-900 dark:text-gray-100">Help</h1>
        <div className="flex h-full flex-col gap-4">
          <div className="flex-1 overflow-y-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            {messages.map((message, index) => (
              <Card
                key={index}
                className={`mb-4 p-4 
                ${
                  message.type === 'user'
                    ? 'bg-blue-50 text-gray-900 dark:bg-blue-900 dark:text-gray-100'
                    : 'bg-green-50 text-gray-900 dark:bg-green-900 dark:text-gray-100'
                }`}
              >
                <div
                  className={`text-sm ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <strong>{message.type === 'user' ? 'You' : 'System'}:</strong>{' '}
                  {message.text}
                </div>
              </Card>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Input
              className="flex-1 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              variant="primary"
              className="bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100"
              onClick={handleSend}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
