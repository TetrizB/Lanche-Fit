
'use server';

import {
  personalizedBreakfastRecommendation,
  type PersonalizedBreakfastRecommendationOutput,
} from '@/ai/flows/personalized-breakfast-recommendation';
import { z } from 'zod';

const recommendationSchema = z.object({
  dietaryPreferences: z
    .string()
    .min(10, {
      message: 'Por favor, descreva suas preferências com mais detalhes.',
    }),
});

export type State = {
  message?: string | null;
  errors?: {
    dietaryPreferences?: string[];
  } | null;
  data?: PersonalizedBreakfastRecommendationOutput | null;
};

export async function getRecommendation(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = recommendationSchema.safeParse({
    dietaryPreferences: formData.get('dietaryPreferences'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Erro de validação.',
      data: null,
    };
  }

  try {
    const result = await personalizedBreakfastRecommendation(validatedFields.data);
    return { message: 'Recomendação gerada com sucesso!', data: result, errors: null };
  } catch (error) {
    console.error(error);
    return {
      message:
        'Ocorreu um erro ao gerar sua recomendação. Por favor, tente novamente.',
      data: null,
      errors: null,
    };
  }
}
