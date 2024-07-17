import { PrismaClient } from "@prisma/client";

export async function fetch_answerList() {
  const prisma = new PrismaClient();
  const response = await prisma.tbl_MakeItFair_2024.findMany();
  return response;
}

export const pollData = [
  {
    question_Title:
      "How would you rate your knowledge level of the Canada Disability Benefit?",
    question_Answer: [
      { answerValue: "question1_Excellent", answerTitle: "Excellent" },
      { answerValue: "question1_Good", answerTitle: "Good" },
      { answerValue: "question1_Fair", answerTitle: "Fair" },
      { answerValue: "question1_NotGood", answerTitle: "Not Good" },
      { answerValue: "question1_NoKnowledge", answerTitle: "No Knowledge" },
    ],
  },
  {
    question_Title:
      "Do you think the Canada Disability Benefit as proposed to come in effect July 2025 is adequate for Canadians living with a disability?",
    question_Answer: [
      { answerValue: "question2_Yes", answerTitle: "Yes" },
      { answerValue: "question2_No", answerTitle: "No" },
      { answerValue: "question2_NotSure", answerTitle: "Not Sure" },
    ],
  },

  {
    question_Title:
      "What do you suggest that could improve the disability benefit?",
    question_Answer: [
      {
        answerValue: "question3_MakeItEasier",
        answerTitle: "Make it easier to apply for",
      },
      {
        answerValue: "question3_Begin",
        answerTitle: "Begin providing it sooner",
      },
      {
        answerValue: "question3_Provide",
        answerTitle: "Provide a higher amount of money monthly",
      },
      {
        answerValue: "question3_NotSure",
        answerTitle:
          "Do not allow the provinces to take back any additional income through taxation",
      },
      { answerValue: "question3_All", answerTitle: "All of the above" },
    ],
  },
];
