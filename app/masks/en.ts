import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f310",
    name: "--",
    context: [
      {
        id: "Copilot-0",
        role: "system",
        content:
          'You are an AI assistant.',
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4o",
      temperature: 0.8,
      max_tokens: 4000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 999000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480410,
  },
];
