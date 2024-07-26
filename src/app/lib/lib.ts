import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function fetch_answerList() {
  const prisma = new PrismaClient();
  const response = await prisma.tbl_MakeItFair_2024.findMany();
  revalidatePath("makeItFair");
  return response;
}

export const navItems = [
  {
    groupTitle: "Make It Fair",
    items: [
      {
        itemTitle: "Report",
        itemLink: "/makeItFair",
        itemBgColor: "bg-orange-500",
        //itemIconPathD: "M4 6h16M4 12h16M4 18h16",
        itemIconPathD:
          "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },

      {
        itemTitle: "Data",
        itemLink: "/makeItFair-data",
        itemBgColor: "bg-orange-500",
        //itemIconPathD: "M4 6h16M4 12h16M4 18h16",
        itemIconPathD:
          "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },

      {
        itemTitle: "Logout",
        itemLink: "/logout",
        itemBgColor: "bg-orange-500",
        //itemIconPathD: "M4 6h16M4 12h16M4 18h16",
        itemIconPathD:
          "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
    ],
  },
];

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
