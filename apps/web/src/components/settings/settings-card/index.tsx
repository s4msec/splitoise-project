import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const SettingsCard: React.FC<{title: string, description: string, children: React.ReactNode}> = ({ title, description, children }) => {
    return (
      <Card className="border-none mr-4">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="w-[400px]">{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    )
}

export {SettingsCard};