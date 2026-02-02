import { cv } from "@/content/cv";
import SectionHeader from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Skills() {
  return (
    <section id="habilidades" className="py-14">
      <SectionHeader eyebrow="Competencias" title="Habilidades" />
      <Card className="border-white/10 bg-white/5">
        <CardContent className="pt-6">
          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-white/5">
              <TabsTrigger value="tech">Técnicas</TabsTrigger>
              <TabsTrigger value="product">Gestión & Producto</TabsTrigger>
            </TabsList>
            <TabsContent value="tech" className="mt-6">
              <ScrollArea className="h-40 pr-4">
                <div className="flex flex-wrap gap-2">
                  {cv.skills.technical.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="product" className="mt-6">
              <ScrollArea className="h-40 pr-4">
                <div className="flex flex-wrap gap-2">
                  {cv.skills.product.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
