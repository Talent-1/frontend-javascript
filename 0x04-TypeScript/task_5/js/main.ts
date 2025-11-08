// task_5/js/main.ts

/**
 * 1. Define MajorCredits Interface with a unique brand
 */
export interface MajorCredits {
  credits: number;
  // Brand property uniquely identifies this interface
  brand: 'MajorCreditsBrand'; 
}

/**
 * 2. Define MinorCredits Interface with a unique brand
 */
export interface MinorCredits {
  credits: number;
  // Brand property uniquely identifies this interface
  brand: 'MinorCreditsBrand';
}

/**
 * 3. Function to sum MajorCredits
 * @param subject1 - The first subject (type unknown, but must have a 'credits' property)
 * @param subject2 - The second subject
 * @returns An object of type MajorCredits containing the sum of credits
 */
export function sumMajorCredits(
  subject1: { credits: number },
  subject2: { credits: number }
): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  
  // Cast the resulting object to MajorCredits, ensuring the 'brand' property is present
  return {
    credits: totalCredits,
    brand: 'MajorCreditsBrand',
  } as MajorCredits;
}

/**
 * 4. Function to sum MinorCredits
 * @param subject1 - The first subject (type unknown, but must have a 'credits' property)
 * @param subject2 - The second subject
 * @returns An object of type MinorCredits containing the sum of credits
 */
export function sumMinorCredits(
  subject1: { credits: number },
  subject2: { credits: number }
): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;

  // Cast the resulting object to MinorCredits, ensuring the 'brand' property is present
  return {
    credits: totalCredits,
    brand: 'MinorCreditsBrand',
  } as MinorCredits;
}