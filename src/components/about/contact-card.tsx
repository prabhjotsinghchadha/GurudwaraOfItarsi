'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type ContactCardProps = {
  phone?: string;
  email?: string;
  addressLines?: string[];
};

export default function ContactCard({
  phone = '+91-00000-00000',
  email = 'info@itarsigurudwara.org',
  addressLines = [
    'Gurudwara Shree Guru Singh Sabha',
    'Itarsi, Hoshangabad District',
    'Madhya Pradesh, India'
  ]
}: ContactCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Contact</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-2">
        <p>
          <span className="font-medium text-foreground">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium text-foreground">Email:</span> {email}
        </p>
        <div>
          <p className="font-medium text-foreground">Address:</p>
          <address className="not-italic">
            {addressLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </address>
        </div>
      </CardContent>
    </Card>
  );
}
