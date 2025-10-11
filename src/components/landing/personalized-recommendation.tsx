"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { getRecommendation, State } from "@/app/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const initialState: State = {
  message: null,
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full transition-transform hover:scale-105">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Gerando...
        </>
      ) : (
        "Obter Recomendação"
      )}
    </Button>
  );
}

export function PersonalizedRecommendation() {
  const [state, formAction] = useActionState(getRecommendation, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if(state.errors) {
        toast({
          variant: "destructive",
          title: "Ajuste as informações",
          description: state.errors.dietaryPreferences?.[0] || state.message,
        });
      } else if (!state.data) {
        toast({
          variant: "destructive",
          title: "Oops!",
          description: state.message,
        });
      }
    }
    if (state.data) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-lg border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-4xl font-headline text-center">
              Quer uma recomendação personalizada?
            </CardTitle>
            <CardDescription className="text-center text-lg pt-2">
              Use nossa ferramenta de IA para encontrar o café da manhã perfeito
              para você, com base nas suas preferências e restrições.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <Textarea
                name="dietaryPreferences"
                placeholder="Ex: vegetariano, sem glúten, com poucas calorias, gosto de frutas, quero algo rápido para a semana..."
                rows={4}
                required
                className="text-base"
              />
              <SubmitButton />
            </form>

            {state.data && (
              <div className="mt-8 space-y-6 animate-in fade-in-50 duration-500">
                <Separator />
                <h3 className="text-2xl font-headline text-center">Sua Receita Perfeita!</h3>
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">
                      {state.data.recipeName}
                    </CardTitle>
                    <CardDescription>
                      {state.data.recipeDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-bold font-headline text-lg">
                        Ingredientes:
                      </h4>
                      <p className="whitespace-pre-wrap text-muted-foreground">
                        {state.data.recipeIngredients}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold font-headline text-lg">
                        Instruções:
                      </h4>
                      <p className="whitespace-pre-wrap text-muted-foreground">
                        {state.data.recipeInstructions}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
