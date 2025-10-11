'use server';

/**
 * @fileOverview A personalized breakfast recommendation AI agent.
 *
 * - personalizedBreakfastRecommendation - A function that handles the breakfast recommendation process.
 * - PersonalizedBreakfastRecommendationInput - The input type for the personalizedBreakfastRecommendation function.
 * - PersonalizedBreakfastRecommendationOutput - The return type for the personalizedBreakfastRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedBreakfastRecommendationInputSchema = z.object({
  dietaryPreferences: z
    .string()
    .describe(
      'The user dietary preferences and restrictions, such as vegetarian, vegan, gluten-free, allergies, etc.'
    ),
});
export type PersonalizedBreakfastRecommendationInput = z.infer<
  typeof PersonalizedBreakfastRecommendationInputSchema
>;

const PersonalizedBreakfastRecommendationOutputSchema = z.object({
  recipeName: z.string().describe('The name of the recommended recipe.'),
  recipeDescription: z
    .string()
    .describe('A short description of the recommended recipe.'),
  recipeIngredients: z
    .string()
    .describe('A list of ingredients for the recommended recipe.'),
  recipeInstructions: z
    .string()
    .describe('The instructions for preparing the recommended recipe.'),
});
export type PersonalizedBreakfastRecommendationOutput = z.infer<
  typeof PersonalizedBreakfastRecommendationOutputSchema
>;

export async function personalizedBreakfastRecommendation(
  input: PersonalizedBreakfastRecommendationInput
): Promise<PersonalizedBreakfastRecommendationOutput> {
  return personalizedBreakfastRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedBreakfastRecommendationPrompt',
  input: {schema: PersonalizedBreakfastRecommendationInputSchema},
  output: {schema: PersonalizedBreakfastRecommendationOutputSchema},
  prompt: `You are a personal breakfast recipe recommender. A user will provide their dietary preferences and restrictions. You will respond with a breakfast recipe from a selection of 200 recipes.

User Preferences: {{{dietaryPreferences}}}

Respond in the following JSON format:
{
  "recipeName": "",
  "recipeDescription": "",
  "recipeIngredients": "",
  "recipeInstructions": ""
}`,
});

const personalizedBreakfastRecommendationFlow = ai.defineFlow(
  {
    name: 'personalizedBreakfastRecommendationFlow',
    inputSchema: PersonalizedBreakfastRecommendationInputSchema,
    outputSchema: PersonalizedBreakfastRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
