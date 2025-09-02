import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-pretty text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-1">
        {lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </CardContent>
    </Card>
  );
}
