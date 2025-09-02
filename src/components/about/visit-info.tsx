'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function VisitInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Visiting Information</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-3">
        <div>
          <p className="font-medium text-foreground">Daily Darshan</p>
          <p>04:30 AM – 09:30 PM</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Nitnem & Kirtan</p>
          <p>Morning and Evening Diwans as per Gurmat Maryada</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Langar</p>
          <p>Seva throughout the day; Sangat is welcome to participate</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Best Time to Visit</p>
          <p>Early morning or evening Kirtan for a peaceful experience</p>
        </div>
      </CardContent>
    </Card>
  );
}
