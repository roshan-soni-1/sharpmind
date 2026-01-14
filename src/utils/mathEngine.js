export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


const buildOptions = (answer, difficulty) => {
  const ranges = {
    basic: 15,
    mid: 40,
    advance: 100
  };
  
  const range = ranges[difficulty] || 15;
  const options = new Set([answer]);
  let attempts = 0;
  const maxAttempts = 100;

  while (options.size < 4 && attempts < maxAttempts) {
    attempts++;
    const deviation = getRandomInt(-range, range);
    
    if (deviation === 0) continue;

    const value = answer + deviation;
    if (value > 0) {
      options.add(value);
    }
  }

  // ensure we always have 4 options
  while (options.size < 4) {
    options.add(answer + options.size * 10);
  }

  // Shuffle options
  return Array.from(options).sort(() => Math.random() - 0.5);
};

/**
 * Get number ranges based on difficulty
 */
const getDifficultyRanges = (difficulty) => {
  const ranges = {
    basic: { min: 11, max: 199 },
    mid: { min: 101, max: 499 },
    advance: { min: 101, max: 999 }
  };
  
  return ranges[difficulty] || ranges.basic;
};

/**
 * Generate addition question
 */
const generateAddition = (min, max) => {
  const num1 = getRandomInt(min, max);
  const num2 = getRandomInt(min, max);
  const answer = num1 + num2;
  const display = `${num1} + ${num2}`;
  
  return { display, answer };
};

/**
 * Generate subtraction question
 */
const generateSubtraction = (min, max) => {
  let num1 = getRandomInt(min, max);
  let num2 = getRandomInt(min, max);
  
  // Ensure non-negative result
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  
  const answer = num1 - num2;
  const display = `${num1} - ${num2}`;
  
  return { display, answer };
};

/**
 * Generate multiplication question
 */
const generateMultiplication = (difficulty) => {
  // Normal mode → simple a × b
  if (difficulty !== 'mid') {
    const num1 = getRandomInt(5, 15);
    const num2 = getRandomInt(5, 12);

    return {
      display: `${num1} × ${num2}`,
      answer: num1 * num2
    };
  }


  const a = getRandomInt(5, 10);
  const b = getRandomInt(5, 15);
  const c = getRandomInt(2, 6);


  let display, answer;

  display = `${a} × ${b} × ${c}`;
  answer = (a * b) * c;


  return { display, answer };
};


/**
 * Generate division question
 */
const generateDivision = (difficulty) => {
  const maxDivisor = difficulty === 'mid' ? 20 : 12;
  const maxQuotient = difficulty === 'mid' ? 25 : 15;
  
  const num2 = getRandomInt(2, maxDivisor);
  const answer = getRandomInt(3, maxQuotient);
  const num1 = num2 * answer;
  const display = `${num1} ÷ ${num2}`;
  
  return { display, answer };
};

/**
 * Generate bracket question (order of operations)
 */
const generateBracket = (difficulty) => {
  const ranges = getDifficultyRanges(difficulty);
  
  const a = getRandomInt(
    difficulty === 'advance' ? 50 : 20,
    difficulty === 'advance' ? 99 : 50
  );
  const b = getRandomInt(10, difficulty === 'advance' ? 30 : 20);
  const c = getRandomInt(5, difficulty === 'advance' ? 25 : 15);

  const patterns = [
    {
      display: `(${a} + ${b}) - ${c}`,
      answer: (a + b) - c
    },
    {
      display: `(${a} - ${b}) + ${c}`,
      answer: (a - b) + c
    },
    {
      display: `${a} + (${b} × ${c})`,
      answer: a + (b * c)
    },
    {
      display: `(${a} × ${b}) - ${c}`,
      answer: (a * b) - c
    }
  ];

  return patterns[getRandomInt(0, patterns.length - 1)];
};

/**
 * Main Question Generator
 * @param {string} mode - Operation mode: 'plus', 'minus', 'multiply', 'divide', 'bracket', 'mix'
 * @param {string} difficulty - Difficulty level: 'basic', 'mid', 'advance'
 * @returns {Object} Question object with display, answer, and options
 */
export const generateQuestion = (mode, difficulty = 'basic') => {
  let display, answer;
  const { min, max } = getDifficultyRanges(difficulty);

  switch (mode) {
    case 'plus': {
      const result = generateAddition(min, max);
      display = result.display;
      answer = result.answer;
      break;
    }

    case 'minus': {
      const result = generateSubtraction(min, max);
      display = result.display;
      answer = result.answer;
      break;
    }

    case 'multiply': {
      const result = generateMultiplication(difficulty);
      display = result.display;
      answer = result.answer;
      break;
    }

    case 'divide': {
      const result = generateDivision(difficulty);
      display = result.display;
      answer = result.answer;
      break;
    }

    case 'bracket': {
      const result = generateBracket(difficulty);
      display = result.display;
      answer = result.answer;
      break;
    }

    case 'mix': {
      const modes = ['plus', 'minus', 'multiply', 'divide', 'bracket'];
      const randomMode = modes[getRandomInt(0, modes.length - 1)];
      return generateQuestion(randomMode, difficulty);
    }

    default: {
      const result = generateAddition(min, max);
      display = result.display;
      answer = result.answer;
    }
  }

  return {
    display,
    answer,
    options: buildOptions(answer, difficulty)
  };
};