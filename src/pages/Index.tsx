
import { ImageGenerator } from "@/components/ImageGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-slideUp">
            AI Image Generator
          </h1>
          <p className="text-muted-foreground max-w-[600px] mx-auto animate-slideUp">
            Transform your ideas into stunning artwork with our AI-powered image
            generator. Simply describe what you want to see.
          </p>
        </div>
        <ImageGenerator />
      </div>
    </div>
  );
};

export default Index;
